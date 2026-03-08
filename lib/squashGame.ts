// ============================================================================
// SQUASH ARCADE GAME - Core Physics & Game Logic
// ============================================================================

export type GameStatus = "idle" | "serving" | "playing" | "won" | "lost";
export type Difficulty = "easy" | "normal" | "hard";

// ============================================================================
// CONSTANTS
// ============================================================================

export const COURT_WIDTH = 600;
export const COURT_HEIGHT = 400;
export const BALL_RADIUS = 8;
export const PADDLE_WIDTH = 12;
export const PADDLE_HEIGHT = 80;
export const FRONT_WALL_X = 50;
export const BACK_WALL_X = 550;
export const MAX_BALL_SPEED = 8;
export const BALL_ACCELERATION = 0.15;
export const GRAVITY = 0.08;
export const FRICTION = 0.98;
export const PADDLE_SPEED = 6;
export const WINNING_SCORE = 5;
export const SERVE_DELAY = 1000;

// ============================================================================
// GAME STATE INTERFACE
// ============================================================================

export interface SquashGameState {
  gameStatus: GameStatus;
  ballX: number;
  ballY: number;
  ballVX: number;
  ballVY: number;
  playerY: number;
  aiY: number;
  playerScore: number;
  aiScore: number;
  isPlayerServing: boolean;
  serveStartTime: number | null;
  rallyCount: number;
}

// ============================================================================
// AI CONFIGURATION
// ============================================================================

export interface AIConfig {
  reactionDelay: number;
  accuracy: number;
  predictionError: number;
  paddleSpeed: number;
}

export const AI_CONFIGS: Record<Difficulty, AIConfig> = {
  easy: {
    reactionDelay: 300,
    accuracy: 0.65,
    predictionError: 80,
    paddleSpeed: 3,
  },
  normal: {
    reactionDelay: 150,
    accuracy: 0.82,
    predictionError: 40,
    paddleSpeed: 4.5,
  },
  hard: {
    reactionDelay: 50,
    accuracy: 0.95,
    predictionError: 15,
    paddleSpeed: 6,
  },
};

// ============================================================================
// INITIALIZATION
// ============================================================================

export function initializeGame(): SquashGameState {
  return {
    gameStatus: "idle",
    ballX: COURT_WIDTH / 2,
    ballY: COURT_HEIGHT / 2,
    ballVX: 0,
    ballVY: 0,
    playerY: COURT_HEIGHT / 2 - PADDLE_HEIGHT / 2,
    aiY: COURT_HEIGHT / 2 - PADDLE_HEIGHT / 2,
    playerScore: 0,
    aiScore: 0,
    isPlayerServing: true,
    serveStartTime: null,
    rallyCount: 0,
  };
}

export function startServe(state: SquashGameState, isPlayerServing: boolean): SquashGameState {
  const newState = { ...state };
  newState.isPlayerServing = isPlayerServing;
  newState.gameStatus = "serving";
  newState.serveStartTime = Date.now();
  newState.rallyCount = 0;

  if (isPlayerServing) {
    newState.ballX = BACK_WALL_X - 30;
    newState.ballY = state.playerY + PADDLE_HEIGHT / 2;
  } else {
    newState.ballX = FRONT_WALL_X + 30;
    newState.ballY = state.aiY + PADDLE_HEIGHT / 2;
  }

  newState.ballVX = 0;
  newState.ballVY = 0;

  return newState;
}

// ============================================================================
// PHYSICS ENGINE
// ============================================================================

export function updateBallPhysics(state: SquashGameState): SquashGameState {
  const newState = { ...state };

  // Apply gravity
  newState.ballVY += GRAVITY;

  // Apply friction
  newState.ballVX *= FRICTION;
  newState.ballVY *= FRICTION;

  // Update position
  newState.ballX += newState.ballVX;
  newState.ballY += newState.ballVY;

  // Top/bottom wall bounces
  if (newState.ballY - BALL_RADIUS < 0) {
    newState.ballY = BALL_RADIUS;
    newState.ballVY = -newState.ballVY * 0.92;
  }
  if (newState.ballY + BALL_RADIUS > COURT_HEIGHT) {
    newState.ballY = COURT_HEIGHT - BALL_RADIUS;
    newState.ballVY = -newState.ballVY * 0.92;
  }

  // No front/back wall bouncing — if paddles miss, ball goes through for scoring

  // Speed cap
  const speed = Math.sqrt(newState.ballVX ** 2 + newState.ballVY ** 2);
  if (speed > MAX_BALL_SPEED) {
    const scale = MAX_BALL_SPEED / speed;
    newState.ballVX *= scale;
    newState.ballVY *= scale;
  }

  return newState;
}

// ============================================================================
// COLLISION DETECTION
// ============================================================================

function circleRectCollision(
  cx: number,
  cy: number,
  r: number,
  rect: { x: number; y: number; w: number; h: number }
): boolean {
  const closestX = Math.max(rect.x, Math.min(cx, rect.x + rect.w));
  const closestY = Math.max(rect.y, Math.min(cy, rect.y + rect.h));
  const distX = cx - closestX;
  const distY = cy - closestY;
  return distX * distX + distY * distY < r * r;
}

export function checkPaddleCollision(state: SquashGameState): SquashGameState {
  const newState = { ...state };

  // Player paddle (bottom-right)
  const playerPaddleRect = {
    x: BACK_WALL_X - PADDLE_WIDTH - 10,
    y: state.playerY,
    w: PADDLE_WIDTH,
    h: PADDLE_HEIGHT,
  };

  // AI paddle (top-left)
  const aiPaddleRect = {
    x: FRONT_WALL_X + 10,
    y: state.aiY,
    w: PADDLE_WIDTH,
    h: PADDLE_HEIGHT,
  };

  // Player paddle collision
  if (circleRectCollision(state.ballX, state.ballY, BALL_RADIUS, playerPaddleRect)) {
    const hitPoint = (state.ballY - state.playerY) / PADDLE_HEIGHT - 0.5;
    newState.ballVX = -Math.abs(newState.ballVX) - BALL_ACCELERATION;
    newState.ballVY += hitPoint * 2;
    newState.ballX = playerPaddleRect.x - BALL_RADIUS;
    newState.rallyCount++;
    return newState;
  }

  // AI paddle collision
  if (circleRectCollision(state.ballX, state.ballY, BALL_RADIUS, aiPaddleRect)) {
    const hitPoint = (state.ballY - state.aiY) / PADDLE_HEIGHT - 0.5;
    newState.ballVX = Math.abs(newState.ballVX) + BALL_ACCELERATION;
    newState.ballVY += hitPoint * 2;
    newState.ballX = aiPaddleRect.x + BALL_RADIUS + PADDLE_WIDTH;
    newState.rallyCount++;
    return newState;
  }

  return newState;
}

export function checkScoringConditions(state: SquashGameState): SquashGameState {
  const newState = { ...state };

  // Ball went past player side (right) → AI scores
  if (newState.ballX > BACK_WALL_X + BALL_RADIUS) {
    newState.aiScore++;
    if (newState.aiScore >= WINNING_SCORE) {
      newState.gameStatus = "lost";
    } else {
      newState.gameStatus = "serving";
      newState.isPlayerServing = true;
      newState.serveStartTime = Date.now();
      newState.ballX = COURT_WIDTH / 2;
      newState.ballY = COURT_HEIGHT / 2;
      newState.ballVX = 0;
      newState.ballVY = 0;
    }
    return newState;
  }

  // Ball went past AI side (left) → Player scores
  if (newState.ballX < FRONT_WALL_X - BALL_RADIUS) {
    newState.playerScore++;
    if (newState.playerScore >= WINNING_SCORE) {
      newState.gameStatus = "won";
    } else {
      newState.gameStatus = "serving";
      newState.isPlayerServing = false;
      newState.serveStartTime = Date.now();
      newState.ballX = COURT_WIDTH / 2;
      newState.ballY = COURT_HEIGHT / 2;
      newState.ballVX = 0;
      newState.ballVY = 0;
    }
    return newState;
  }

  return newState;
}

// ============================================================================
// AI LOGIC
// ============================================================================

function predictBallTrajectory(state: SquashGameState, framesAhead: number): Array<{ x: number; y: number }> {
  const predictions: Array<{ x: number; y: number }> = [];
  let simState = { ...state };

  for (let i = 0; i < framesAhead; i++) {
    simState = updateBallPhysics(simState);
    predictions.push({ x: simState.ballX, y: simState.ballY });
  }

  return predictions;
}

export function updateAI(state: SquashGameState, difficulty: Difficulty): SquashGameState {
  const newState = { ...state };
  const config = AI_CONFIGS[difficulty];

  // Predict ball trajectory
  const predictions = predictBallTrajectory(state, 60);

  // Find where ball will be when approaching AI's X position
  const ballWhenReachesAI = predictions.find((p) => p.x <= FRONT_WALL_X + 80);

  if (!ballWhenReachesAI) {
    // Ball not approaching → center paddle
    const centerY = COURT_HEIGHT / 2 - PADDLE_HEIGHT / 2;
    if (newState.aiY < centerY - 2) {
      newState.aiY = Math.min(newState.aiY + config.paddleSpeed, centerY);
    } else if (newState.aiY > centerY + 2) {
      newState.aiY = Math.max(newState.aiY - config.paddleSpeed, centerY);
    }
    return newState;
  }

  // Apply prediction error (AI is not perfect)
  if (Math.random() > config.accuracy) {
    // AI misses intentionally sometimes
    newState.aiY = Math.random() * (COURT_HEIGHT - PADDLE_HEIGHT);
    return newState;
  }

  // Target: center paddle on predicted ball Y
  let targetY = ballWhenReachesAI.y - PADDLE_HEIGHT / 2;
  targetY += (Math.random() - 0.5) * config.predictionError;
  targetY = Math.max(0, Math.min(COURT_HEIGHT - PADDLE_HEIGHT, targetY));

  // Move AI paddle towards target
  if (newState.aiY < targetY - 5) {
    newState.aiY = Math.min(newState.aiY + config.paddleSpeed, targetY);
  } else if (newState.aiY > targetY + 5) {
    newState.aiY = Math.max(newState.aiY - config.paddleSpeed, targetY);
  }

  return newState;
}

// ============================================================================
// GAME LOOP
// ============================================================================

export function processGameFrame(state: SquashGameState, playerY: number, difficulty: Difficulty): SquashGameState {
  let newState = { ...state };
  newState.playerY = Math.max(0, Math.min(COURT_HEIGHT - PADDLE_HEIGHT, playerY));

  if (newState.gameStatus === "playing") {
    newState = updateBallPhysics(newState);
    newState = checkPaddleCollision(newState);
    newState = checkScoringConditions(newState);
    newState = updateAI(newState, difficulty);
  }

  // Position ball near serving paddle during serve
  if (newState.gameStatus === "serving") {
    if (newState.isPlayerServing) {
      newState.ballX = BACK_WALL_X - 30;
      newState.ballY = newState.playerY + PADDLE_HEIGHT / 2;
    } else {
      newState.ballX = FRONT_WALL_X + 30;
      newState.ballY = newState.aiY + PADDLE_HEIGHT / 2;
    }
    newState.ballVX = 0;
    newState.ballVY = 0;
  }

  return newState;
}

// ============================================================================
// SERVE HANDLING
// ============================================================================

export function playerHitServe(state: SquashGameState): SquashGameState {
  if (state.gameStatus !== "serving" || !state.isPlayerServing) {
    return state;
  }

  const newState = { ...state };
  newState.ballVX = -3 - Math.random() * 1;
  newState.ballVY = (Math.random() - 0.5) * 1.5;
  newState.gameStatus = "playing";
  newState.serveStartTime = null;

  return newState;
}

export function aiHitServe(state: SquashGameState): SquashGameState {
  if (state.gameStatus !== "serving" || state.isPlayerServing) {
    return state;
  }

  const newState = { ...state };
  newState.ballVX = 3 + Math.random() * 1;
  newState.ballVY = (Math.random() - 0.5) * 1.5;
  newState.gameStatus = "playing";
  newState.serveStartTime = null;

  return newState;
}
