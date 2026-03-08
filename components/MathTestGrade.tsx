import Link from "next/link";

// ─── GRADE DATA (US Curriculum) ────────────────────────────────────────────────
const GRADE_DATA: Record<number, {
  age: string;
  suffix: string;
  topics: { icon: string; label: string }[];
  intro: string;
  deepDive: string[];
  faqs: { q: string; a: string }[];
}> = {
  1: {
    age: "6–7",
    suffix: "st",
    topics: [
      { icon: "🔢", label: "Numbers to 20" },
      { icon: "➕", label: "Addition to 20" },
      { icon: "➖", label: "Subtraction to 20" },
      { icon: "📏", label: "Comparing numbers" },
      { icon: "🔷", label: "Basic shapes" },
      { icon: "1️⃣", label: "Counting & ordering" },
    ],
    intro: `The free online math test for 1st grade covers all key topics in the US Common Core curriculum for first graders ages 6–7. Children practice counting to 120, adding and subtracting within 20, comparing numbers, and identifying basic 2D and 3D shapes. No download, no sign-up — just open and play directly in any browser. Perfect for daily practice at home or as a quick assessment tool for teachers and parents.`,
    deepDive: [
      `First grade math focuses on building a strong number sense. Students learn to count forward and backward starting from any number within 120. They read and write numerals, understand the value of digits in two-digit numbers (tens and ones), and compare numbers using the symbols <, >, and =. These foundational skills underpin all future math learning.`,
      `Addition and subtraction within 20 are the core arithmetic skills of 1st grade. Students use strategies like counting on, making ten, and using known facts to solve equations. Word problems are introduced: "Maria has 8 apples and gives away 3. How many does she have left?" These story problems develop both math and reading comprehension simultaneously.`,
      `Measurement is introduced in 1st grade through direct comparison: which pencil is longer? Which box is heavier? Students use non-standard units (paper clips, blocks) to measure length before transitioning to inches and centimeters. Telling time to the hour and half-hour on an analog clock is also a 1st grade Common Core standard.`,
      `Geometry in 1st grade covers naming and describing 2D shapes (circle, triangle, rectangle, square, hexagon) and 3D shapes (cube, cone, cylinder, sphere). Students identify shapes in real-world objects, compose new shapes from smaller ones, and describe attributes like the number of sides and corners. This spatial reasoning practice builds strong visual math skills.`,
    ],
    faqs: [
      { q: "What math topics are covered in 1st grade?", a: "First grade covers counting to 120, addition and subtraction within 20, place value (tens and ones), comparing two-digit numbers, measuring lengths, telling time to the hour and half-hour, and identifying 2D and 3D shapes." },
      { q: "Is this math test free for 1st graders?", a: "Yes — completely free. No account, no download, no payment required. The test runs directly in any browser on phones, tablets, and computers." },
      { q: "How long does the 1st grade math test take?", a: "A typical session takes 5–10 minutes. There's no time limit, so students can go at their own pace. The test can be repeated as many times as needed with automatically varied questions." },
      { q: "How can parents help a 1st grader with math at home?", a: "Short daily practice sessions of 10–15 minutes are more effective than occasional long sessions. Use everyday activities: count objects around the house, practice addition while cooking, tell time together on an analog clock. Online tools like PLIZIO provide structured practice with immediate feedback." },
      { q: "What score is passing for 1st grade math?", a: "In the US system, 70% is typically considered passing (a C grade). However, the goal of regular practice is mastery — aiming for 80–90%+ on each topic before moving on." },
      { q: "Can teachers use this test in the classroom?", a: "Yes. The test is browser-based and works on any device, making it suitable for tablet rotations or computer lab sessions. It requires no accounts or setup — students just open the URL and start." },
    ],
  },
  2: {
    age: "7–8",
    suffix: "nd",
    topics: [
      { icon: "💯", label: "Numbers to 1,000" },
      { icon: "➕", label: "Addition to 100" },
      { icon: "➖", label: "Subtraction to 100" },
      { icon: "✖️", label: "Intro to multiplication" },
      { icon: "📐", label: "Measurement (inches/cm)" },
      { icon: "⏰", label: "Time to the minute" },
    ],
    intro: `The free online math test for 2nd grade covers all major US Common Core math standards for students ages 7–8. Second graders practice addition and subtraction within 1,000, skip counting, place value to the hundreds, measuring in inches and centimeters, telling time to the nearest five minutes, and an introduction to equal groups as the foundation of multiplication. Instant play, no registration required.`,
    deepDive: [
      `Second grade extends number sense to 1,000. Students read and write numbers, understand that three-digit numbers represent hundreds, tens, and ones, and compare numbers using place value. Skip counting by 2s, 5s, 10s, and 100s strengthens number fluency and directly prepares students for multiplication in 3rd grade.`,
      `Addition and subtraction within 1,000 using strategies and algorithms is a key 2nd grade standard. Students learn to add and subtract two-digit numbers mentally and begin using written strategies for three-digit numbers. Regrouping (carrying and borrowing) is introduced as a core procedure. Word problems build to two-step scenarios requiring students to choose the right operation.`,
      `Measurement in 2nd grade introduces both customary (inches, feet) and metric (centimeters, meters) units. Students estimate and measure lengths using rulers, compare lengths, and solve word problems involving measurement. The number line becomes a key tool for showing differences between lengths. Telling time to the nearest five minutes on analog and digital clocks is also a 2nd grade standard.`,
      `Data and graphing: students read and create bar graphs, picture graphs, and line plots. They answer questions about data — how many more? how many fewer? This introduces statistical thinking at an age-appropriate level. Money concepts are also introduced: counting collections of coins and dollar bills and making change for small amounts.`,
    ],
    faqs: [
      { q: "What math should a 2nd grader know?", a: "By the end of 2nd grade, students should be able to add and subtract within 1,000, understand place value to hundreds, measure length in inches and centimeters, tell time to the nearest 5 minutes, count money, and work with basic bar graphs and picture graphs." },
      { q: "Is the 2nd grade math test free?", a: "Yes, 100% free with no sign-up required. Works on any device with a browser." },
      { q: "What is regrouping in 2nd grade math?", a: "Regrouping (also called carrying or borrowing) is the process of exchanging ten ones for one ten, or ten tens for one hundred, when adding or subtracting. For example, when adding 47 + 35, you regroup the 12 ones into 1 ten and 2 ones, giving 82." },
      { q: "How much time should a 2nd grader spend on math daily?", a: "Research suggests 15–20 minutes of focused math practice per day for 2nd graders. This can be split between traditional practice (worksheets, flashcards) and digital tools like PLIZIO for variety and motivation." },
      { q: "Is multiplication taught in 2nd grade?", a: "In 2nd grade, multiplication is introduced conceptually through equal groups and repeated addition (e.g., 3 groups of 4 = 4 + 4 + 4 = 12). Formal multiplication with times tables is a 3rd grade standard." },
      { q: "Can I track my child's progress?", a: "PLIZIO saves progress locally in the browser without requiring an account. Parents can observe scores after each session. For formal progress tracking, the test can be used as a pre- and post-assessment before and after a study period." },
    ],
  },
  3: {
    age: "8–9",
    suffix: "rd",
    topics: [
      { icon: "✖️", label: "Multiplication (1–10)" },
      { icon: "➗", label: "Division" },
      { icon: "½", label: "Fractions basics" },
      { icon: "📏", label: "Perimeter & area" },
      { icon: "⏰", label: "Time & elapsed time" },
      { icon: "📊", label: "Word problems" },
    ],
    intro: `The free online math test for 3rd grade covers all US Common Core math standards for students ages 8–9. Third grade is when students master multiplication and division facts, learn the fundamentals of fractions, and begin measuring area and perimeter. Our test provides instant, randomized practice across all these topics — free, no login, runs in any browser. Used by over 10,000 students monthly for homework help, test prep, and summer review.`,
    deepDive: [
      `Multiplication and division are the defining skills of 3rd grade. Students learn all multiplication facts from 1×1 to 10×10 and the corresponding division facts. Understanding multiplication as equal groups, arrays, and repeated addition builds conceptual depth alongside fact fluency. By year end, students should recall basic facts within 100 automatically — this fluency is critical for all future math.`,
      `Fractions are introduced in 3rd grade as numbers on a number line. Students learn that fractions represent equal parts of a whole: 1/2, 1/3, 1/4, 1/6, and 1/8. They compare fractions with the same numerator or denominator, place fractions on a number line, and recognize equivalent fractions (e.g., 2/4 = 1/2). This conceptual understanding is the foundation for fraction operations in 4th and 5th grade.`,
      `Measurement deepens in 3rd grade. Students measure liquid volumes in liters and mass in grams and kilograms. They solve one-step word problems involving these measurements. The concept of area is introduced — students understand area as the number of square units needed to cover a figure and calculate area by multiplying side lengths for rectangles. Perimeter (the total length of all sides) is calculated and distinguished from area.`,
      `Geometry covers quadrilaterals (including rhombuses, rectangles, and squares) and their properties. Students partition shapes into equal parts and name the parts as fractions. Data is represented and analyzed using scaled bar graphs and pictographs. Two-step word problems requiring multiple operations are a key 3rd grade challenge that the PLIZIO Math Test addresses directly.`,
    ],
    faqs: [
      { q: "What multiplication facts should a 3rd grader know?", a: "By the end of 3rd grade, students should know all multiplication facts from 0–10 by memory. The most challenging facts are typically 6×7, 7×8, and 8×9. Regular practice using flashcards, songs, or apps is the most effective approach." },
      { q: "When are fractions taught in elementary school?", a: "Fractions are first introduced in 3rd grade (parts of a whole and fractions on a number line). 4th grade adds fraction addition/subtraction and mixed numbers. 5th grade extends to multiplication and division of fractions." },
      { q: "What is area in 3rd grade math?", a: "Area is the amount of space inside a 2D shape, measured in square units. In 3rd grade, students calculate area by counting unit squares or by multiplying the length times the width of a rectangle. Example: a rectangle 5 units long and 3 units wide has an area of 15 square units." },
      { q: "Is the 3rd grade math test aligned with Common Core?", a: "Yes. The PLIZIO Math Test covers the major 3rd grade Common Core standards: multiplication and division within 100, fractions (NF), area and perimeter (MD), and problem-solving with scaled graphs." },
      { q: "How do I help my 3rd grader with math homework?", a: "For multiplication facts: use flashcards and daily 5-minute drills. For fractions: use visual models (pizza slices, fraction bars). For word problems: read together and identify what's being asked before computing. Online tools like PLIZIO provide additional structured practice with instant feedback." },
      { q: "How long is the 3rd grade math test?", a: "Each session takes 8–12 minutes. Questions are randomized so each attempt is different, making the test suitable for repeated daily practice." },
    ],
  },
  4: {
    age: "9–10",
    suffix: "th",
    topics: [
      { icon: "✖️", label: "Multi-digit multiplication" },
      { icon: "➗", label: "Long division" },
      { icon: "½", label: "Fractions (add/subtract)" },
      { icon: "📐", label: "Angles & geometry" },
      { icon: "🔢", label: "Numbers to 1 million" },
      { icon: "📏", label: "Measurement & conversion" },
      { icon: "🔄", label: "Rounding (tens/hundreds)" },
      { icon: "⭕", label: "Circle & geometry" },
    ],
    intro: `The free online math test for 4th grade targets the core US Common Core standards for students ages 9–10. Fourth graders tackle multi-digit multiplication, long division, fraction addition and subtraction with like denominators, an introduction to decimals, angle measurement, rounding strategies, large numbers up to 1 million, and circle geometry. Our randomized test provides unlimited practice for each topic with immediate feedback — no account needed, works on any device.`,
    deepDive: [
      `Multi-digit multiplication is a central 4th grade skill. Students multiply two- and three-digit numbers by one-digit numbers, and two two-digit numbers together (e.g., 34 × 27). They use strategies like the standard algorithm, area models, and partial products. Solid recall of multiplication facts from 3rd grade is essential — students who haven't mastered times tables struggle significantly with this content.`,
      `Long division with remainders is introduced in 4th grade. Students divide up to four-digit dividends by one-digit divisors. The standard algorithm (divide, multiply, subtract, bring down) is taught step by step. Understanding the connection between multiplication and division (they are inverse operations) helps students check their work and develop number sense.`,
      `Fraction work deepens significantly. Students add and subtract fractions with like denominators (e.g., 3/8 + 2/8 = 5/8), build fractions from unit fractions, and work with mixed numbers. They compare fractions using benchmarks (0, 1/2, 1) and find equivalent fractions. This is also the year students first encounter decimals: tenths and hundredths as decimal fractions, connecting 3/10 = 0.3 and 35/100 = 0.35.`,
      `Geometry in 4th grade focuses on angles: students measure angles in degrees using a protractor, classify angles as acute, right, obtuse, or straight, and recognize angle relationships. Symmetry is explored, and students classify two-dimensional figures based on parallel and perpendicular sides. Measurement and data includes converting between units within the same system (feet to inches, kilograms to grams) and solving multi-step word problems involving measurement.`,
    ],
    faqs: [
      { q: "What is long division and when is it taught?", a: "Long division is a step-by-step method for dividing large numbers. It's introduced in 4th grade. The steps are: Divide, Multiply, Subtract, Bring down (sometimes remembered with the phrase 'Does McDonald's Sell Burgers'). Example: 156 ÷ 4 = 39." },
      { q: "How do you add fractions in 4th grade?", a: "In 4th grade, students add and subtract fractions with the SAME denominator by simply adding or subtracting the numerators: 3/8 + 2/8 = 5/8. The denominator stays the same. Fractions with different denominators (requiring finding a common denominator) are a 5th grade standard." },
      { q: "What are decimals in 4th grade?", a: "In 4th grade, decimals are introduced as fractions with denominators of 10 or 100. Students learn that 0.3 = 3/10 and 0.35 = 35/100. They read, write, and compare decimal numbers to the hundredths place and locate them on a number line." },
      { q: "Is the 4th grade math test free?", a: "Yes, completely free. No download, no sign-up. Just open the website and start the test on any device." },
      { q: "What math facts should a 4th grader know?", a: "By 4th grade, students should have fluent recall of all multiplication and division facts within 100 from 3rd grade. This fluency is essential for multi-digit multiplication and long division." },
      { q: "How is 4th grade math different from 3rd grade?", a: "3rd grade introduces multiplication/division facts and basic fractions. 4th grade extends to multi-digit multiplication, long division, fraction operations with like denominators, decimals, angle measurement, and unit conversions — significantly more complex computation." },
    ],
  },
  5: {
    age: "10–11",
    suffix: "th",
    topics: [
      { icon: "½", label: "Fractions (×÷)" },
      { icon: "🔢", label: "Decimals (operations)" },
      { icon: "📦", label: "Volume" },
      { icon: "📊", label: "Coordinate plane" },
      { icon: "➕", label: "Order of operations" },
      { icon: "📐", label: "Geometry (2D)" },
    ],
    intro: `The free online math test for 5th grade covers all major US Common Core math standards for students ages 10–11. Fifth grade is a pivotal year: students complete fraction operations (including multiplication and division), master decimal arithmetic, explore the coordinate plane, calculate volume, and learn order of operations (PEMDAS). Our test provides randomized, immediate-feedback practice for all these topics — free and browser-based.`,
    deepDive: [
      `Fraction multiplication and division are key 5th grade standards. Students multiply fractions by whole numbers and other fractions (e.g., 2/3 × 3/4 = 6/12 = 1/2) and divide whole numbers by fractions and fractions by whole numbers (e.g., 3 ÷ 1/2 = 6). Understanding why these procedures work — using area models and visual representations — builds deep conceptual understanding alongside procedural fluency.`,
      `Decimal operations are extended to all four operations in 5th grade. Students add, subtract, multiply, and divide decimals to the hundredths place. Multiplying decimals (e.g., 2.3 × 1.4 = 3.22) requires understanding how decimal placement works. Dividing by decimals is the most challenging skill at this level. These decimal skills connect directly to the metric system and real-world financial math.`,
      `Order of operations (PEMDAS: Parentheses, Exponents, Multiplication/Division, Addition/Subtraction) is introduced in 5th grade. Students evaluate numerical expressions using correct order of operations and write expressions using grouping symbols. Understanding that 2 + 3 × 4 = 14 (not 20) is a fundamental rule of mathematical notation that applies in all future mathematics.`,
      `Volume is the new measurement concept in 5th grade. Students understand volume as the number of unit cubes that fill a solid figure, calculate volume of rectangular prisms by multiplying length × width × height, and apply this to real-world problems. The coordinate plane is introduced as a tool for graphing points (x, y) in the first quadrant and interpreting data. Students also classify two-dimensional figures in a hierarchy based on properties.`,
    ],
    faqs: [
      { q: "What is PEMDAS and when is it taught?", a: "PEMDAS stands for Parentheses, Exponents, Multiplication/Division (left to right), Addition/Subtraction (left to right). It is the standard order for evaluating math expressions and is first taught in 5th grade. Example: 2 + 3 × 4 = 2 + 12 = 14 (multiply before adding)." },
      { q: "How do you multiply fractions in 5th grade?", a: "To multiply fractions, multiply the numerators together and the denominators together: 2/3 × 3/4 = (2×3)/(3×4) = 6/12 = 1/2. Always simplify (reduce) the result if possible. No common denominator is needed for multiplication — unlike addition and subtraction." },
      { q: "What is volume in 5th grade math?", a: "Volume is the amount of 3D space inside a solid figure, measured in cubic units (cubic inches, cubic centimeters, etc.). Students calculate volume of rectangular prisms using the formula V = l × w × h. Example: a box 4 cm long, 3 cm wide, and 2 cm tall has a volume of 24 cubic cm." },
      { q: "Is the 5th grade math test aligned with Common Core?", a: "Yes. The test covers the major 5th grade Common Core domains: Number and Operations in Base Ten (NBT), Number and Operations — Fractions (NF), Operations and Algebraic Thinking (OA), Measurement and Data (MD), and Geometry (G)." },
      { q: "What's the best way to prepare for a 5th grade math test?", a: "Review your weakest topics first. Use the PLIZIO Math Test to identify where you make mistakes. Practice order of operations with mixed expressions daily. For fractions, use visual models (fraction bars) before moving to algorithms. Short daily practice (15–20 min) beats occasional cramming." },
      { q: "Is the test free for 5th graders?", a: "Yes, completely free. No sign-up, no download. Works on phones, tablets, and computers." },
    ],
  },
  6: {
    age: "11–12",
    suffix: "th",
    topics: [
      { icon: "🔢", label: "Negative numbers" },
      { icon: "📊", label: "Ratios & rates" },
      { icon: "💯", label: "Percentages" },
      { icon: "🔣", label: "Intro to algebra" },
      { icon: "📐", label: "Area & surface area" },
      { icon: "📦", label: "Statistics & data" },
    ],
    intro: `The free online math test for 6th grade covers all US Common Core math standards for students ages 11–12. Sixth grade is the bridge between elementary and middle school math: students work with ratios, rates, and percentages; extend their number system to include negative numbers; begin algebraic thinking with variables and expressions; and analyze statistical data. Our randomized test provides instant-feedback practice for all topics, free and browser-based.`,
    deepDive: [
      `Ratios and proportional relationships are a defining 6th grade domain. Students understand ratios as comparisons (3:2, or 3 to 2, or 3/2), compute unit rates, and solve ratio problems using tables, double number lines, and equations. Percent is introduced as a ratio per 100 — students find a percent of a quantity (30% of 80 = 24) and solve problems involving discounts, taxes, and tips using percent relationships.`,
      `The number system expands to include negative numbers (integers) and rational numbers. Students understand that negative numbers represent values below zero (temperatures, elevations, debts), order and compare integers on a number line, find absolute value, and plot points in all four quadrants of the coordinate plane. Operations with negative numbers begin with addition and subtraction.`,
      `Algebra begins in earnest. Students write and evaluate algebraic expressions (e.g., 3x + 7 when x = 4), identify parts of an expression (coefficient, variable, constant), and use properties of operations (commutative, associative, distributive) to rewrite expressions. They solve one-step equations and inequalities and represent solutions on a number line. This algebraic foundation is critical for 7th and 8th grade math.`,
      `Geometry in 6th grade covers area formulas for triangles, parallelograms, and trapezoids, as well as surface area of rectangular prisms and pyramids using nets. Volume of rectangular prisms with fractional edge lengths is also covered. Statistics introduces statistical variability: mean, median, mode, range, and the distinction between measures of center and measures of spread. Students create histograms, box plots, and dot plots.`,
    ],
    faqs: [
      { q: "What algebra is taught in 6th grade?", a: "6th grade algebra includes writing and evaluating expressions with variables, identifying parts of expressions (terms, coefficients, constants), using the distributive property to rewrite expressions, and solving one-step equations (e.g., x + 5 = 12 → x = 7) and inequalities." },
      { q: "How do you find a percentage of a number?", a: "To find a percentage of a number, convert the percent to a decimal and multiply. Example: 30% of 80 = 0.30 × 80 = 24. Or use a ratio: 30/100 = x/80, cross-multiply to get x = 24. Both methods are valid and taught in 6th grade." },
      { q: "What are negative numbers in 6th grade math?", a: "Negative numbers are numbers less than zero. They appear on the number line to the left of 0. In 6th grade, students learn to order negative numbers, find absolute value (distance from zero), and add and subtract with negative numbers. Example: -3 + 7 = 4; -5 - 2 = -7." },
      { q: "Is the 6th grade math test free?", a: "Yes, completely free. No account or download needed. Works on any device with a browser." },
      { q: "What's the difference between mean, median, and mode?", a: "Mean (average): add all values, divide by the count. Median: the middle value when sorted. Mode: the most frequent value. Example for {2, 4, 4, 6, 9}: mean = 25/5 = 5; median = 4; mode = 4." },
      { q: "Is 6th grade math hard?", a: "6th grade is often a significant jump because math becomes more abstract. The keys to success are strong fluency with fractions and decimals from 5th grade, daily practice (15–20 min), and asking for help when concepts like ratios or negative numbers don't click immediately." },
    ],
  },
  7: {
    age: "12–13",
    suffix: "th",
    topics: [
      { icon: "📊", label: "Proportional reasoning" },
      { icon: "🔣", label: "Linear equations" },
      { icon: "💯", label: "Percent change" },
      { icon: "📐", label: "Geometry (circles, angles)" },
      { icon: "🎲", label: "Probability" },
      { icon: "➕➖", label: "Integer operations" },
    ],
    intro: `The free online math test for 7th grade covers all US Common Core math standards for students ages 12–13. Seventh grade deepens proportional reasoning and percent applications, extends algebra to multi-step equations and inequalities, expands geometry to circles and angle relationships, and introduces probability. Practice all topics with our randomized, instant-feedback test — free, no login, works in any browser.`,
    deepDive: [
      `Proportional relationships are the central 7th grade topic. Students analyze tables, graphs, and equations to determine if a relationship is proportional (constant ratio), calculate unit rates with complex fractions, and solve multi-step ratio and percent problems. Percent change (increase and decrease), simple interest, tax, tip, and commission are key real-world applications that require proportional reasoning.`,
      `Algebra extends to solving multi-step equations with rational coefficients (e.g., 2x + 3 = 11, or 3/4 x - 2 = 7) and two-step inequalities. Students write and solve equations to model real-world situations. They understand that equations have one solution, no solution, or infinitely many solutions. Expressions are rewritten by factoring and expanding using the distributive property with negative numbers.`,
      `The number system expands to operations with rational numbers (fractions, decimals, and negative numbers). Students add, subtract, multiply, and divide negative fractions and mixed numbers. Understanding that (-3/4) × (-2/3) = +1/2 (negative times negative = positive) and why these rules exist deepens mathematical understanding beyond mere memorization.`,
      `Geometry covers angle relationships (complementary, supplementary, vertical, adjacent), triangle properties (angle sum = 180°), and circles (circumference = 2πr, area = πr²). Surface area and volume of three-dimensional figures including pyramids and prisms are calculated. Probability introduces experimental vs. theoretical probability, sample spaces, and compound events using organized lists, tables, and tree diagrams.`,
    ],
    faqs: [
      { q: "What is proportional reasoning in 7th grade?", a: "Proportional reasoning means understanding that two quantities vary at a constant rate. If a car travels 60 miles per hour, in 3 hours it travels 180 miles (60 × 3). Students identify proportional relationships from tables, graphs, and equations and solve problems like: 'If 5 items cost $12, how much do 8 items cost?'" },
      { q: "How do you calculate percent change?", a: "Percent change = (new value - original value) / original value × 100. If a price goes from $50 to $65: (65-50)/50 × 100 = 15/50 × 100 = 30% increase. If it goes from $50 to $40: (40-50)/50 × 100 = -10/50 × 100 = -20% (a 20% decrease)." },
      { q: "What are vertical angles?", a: "Vertical angles are the angles opposite each other when two lines cross. They are always equal. If two lines cross and one angle is 65°, the angle directly across (vertical angle) is also 65°. The adjacent angles are supplementary (add to 180°), so they are each 115°." },
      { q: "Is the 7th grade math test free?", a: "Yes, fully free. No account needed, no download. Browser-based on all devices." },
      { q: "What is simple interest in math?", a: "Simple interest formula: I = P × r × t, where I = interest, P = principal (starting amount), r = rate (as a decimal), t = time in years. Example: $500 at 4% for 3 years: I = 500 × 0.04 × 3 = $60 interest. Total = $560." },
      { q: "How is 7th grade math different from 6th grade?", a: "6th grade introduces ratios, percents, negative numbers, and basic algebra. 7th grade extends each of these: proportional relationships become more complex, algebra moves to multi-step equations, all four operations are used with negative numbers, and geometry adds circles and probability." },
    ],
  },
  8: {
    age: "13–14",
    suffix: "th",
    topics: [
      { icon: "📈", label: "Linear functions" },
      { icon: "🔣", label: "Systems of equations" },
      { icon: "🔢", label: "Exponents & roots" },
      { icon: "📐", label: "Pythagorean theorem" },
      { icon: "🔁", label: "Transformations" },
      { icon: "📊", label: "Statistics (bivariate)" },
    ],
    intro: `The free online math test for 8th grade covers all US Common Core math standards for students ages 13–14. Eighth grade is pre-algebra and the gateway to high school mathematics: linear functions and their graphs, systems of equations, the laws of exponents, square and cube roots, the Pythagorean theorem, geometric transformations, and bivariate statistics. Our randomized test provides unlimited practice with instant feedback — free, no sign-up, any device.`,
    deepDive: [
      `Linear functions are the defining topic of 8th grade. Students understand that a linear equation in the form y = mx + b produces a straight line, where m is the slope (rate of change) and b is the y-intercept. They graph lines, interpret slope as rise over run, write equations from tables and graphs, and distinguish linear from non-linear functions. This is the most important pre-algebra concept for future success in Algebra 1.`,
      `Systems of equations require students to find the solution that satisfies two linear equations simultaneously. Methods include graphing (intersection point), substitution, and elimination. Students determine whether a system has one solution, no solution (parallel lines), or infinitely many solutions (same line). Real-world modeling problems (e.g., pricing plans, mixture problems) make systems concrete and relevant.`,
      `The laws of exponents are extended: students apply the product rule (x^m × x^n = x^(m+n)), quotient rule, power rule, zero exponent, and negative exponents. Scientific notation is used to express very large and very small numbers. Square roots and cube roots are introduced: √49 = 7, ∛27 = 3. Students distinguish between rational and irrational numbers (e.g., √2 is irrational).`,
      `Geometry covers the Pythagorean theorem (a² + b² = c²) and its converse, applied to find distances in 2D and 3D. Geometric transformations — translations, reflections, rotations, and dilations — are studied on the coordinate plane, and students identify congruence and similarity through these transformations. Statistics in 8th grade analyzes two-variable (bivariate) data using scatter plots, lines of best fit, and correlation vs. causation.`,
    ],
    faqs: [
      { q: "What is slope in 8th grade math?", a: "Slope measures the steepness and direction of a line. It is calculated as rise/run = (change in y)/(change in x) between any two points on a line. In y = mx + b, m is the slope. A slope of 2 means for every 1 unit right, the line goes 2 units up. A negative slope means the line goes downward." },
      { q: "How do you use the Pythagorean theorem?", a: "The Pythagorean theorem states that in a right triangle, a² + b² = c², where c is the hypotenuse (longest side) and a, b are the other two sides. Example: if a = 3 and b = 4, then c² = 9 + 16 = 25, so c = 5. This works ONLY for right triangles." },
      { q: "What is scientific notation?", a: "Scientific notation writes very large or small numbers as a decimal between 1 and 10 multiplied by a power of 10. Example: 3,450,000 = 3.45 × 10^6. Example: 0.000045 = 4.5 × 10^-5. Used in science and engineering to handle extreme values." },
      { q: "Is 8th grade math pre-algebra?", a: "Yes. 8th grade Common Core math is often called pre-algebra or Algebra readiness. Some schools offer Algebra 1 in 8th grade instead, covering the same linear functions content in more depth. The PLIZIO test covers the standard 8th grade Common Core curriculum." },
      { q: "Is the 8th grade math test free?", a: "Yes, completely free. No account required. Works on any browser, phone, tablet, or computer." },
      { q: "What should I study for an 8th grade math final?", a: "Focus on: linear functions (slope, y = mx + b), the Pythagorean theorem and its applications, exponent rules and scientific notation, solving systems of equations (2 methods), and geometric transformations on a coordinate plane. Use the PLIZIO Math Test to practice each topic individually before the exam." },
    ],
  },
};

// ─── COMPONENT ─────────────────────────────────────────────────────────────────
interface Props { grade: number }

export default function MathTestGrade({ grade }: Props) {
  const d = GRADE_DATA[grade];
  if (!d) return null;

  const suffix = d.suffix;
  const gradeLabel = `${grade}${suffix} Grade`;
  const ageLabel = `Ages ${d.age}`;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: d.faqs.map(f => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://plizio.com/" },
      { "@type": "ListItem", position: 2, name: "Math Test", item: "https://plizio.com/math-test/" },
      { "@type": "ListItem", position: 3, name: `Math Test ${gradeLabel}`, item: `https://plizio.com/math-test/grade-${grade}/` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div style={{ background: "#0A0A1A", color: "white", minHeight: "100vh" }}>
        <div style={{ maxWidth: 780, margin: "0 auto", padding: "32px 16px 80px" }}>

          {/* Breadcrumb */}
          <nav style={{ fontSize: 13, color: "#7777aa", marginBottom: 24, display: "flex", gap: 6, flexWrap: "wrap" }}>
            <Link href="/" style={{ color: "#7777aa", textDecoration: "none" }}>Home</Link>
            <span>›</span>
            <Link href="/math-test/" style={{ color: "#7777aa", textDecoration: "none" }}>Math Test</Link>
            <span>›</span>
            <span style={{ color: "#e0e0ff" }}>Grade {grade}</span>
          </nav>

          {/* Hero */}
          <div style={{ marginBottom: 40 }}>
            <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 12, flexWrap: "wrap" }}>
              <span style={{ background: "rgba(0,212,255,0.12)", border: "1px solid rgba(0,212,255,0.3)", color: "#00D4FF", borderRadius: 20, padding: "3px 12px", fontSize: 13, fontWeight: 700 }}>
                {gradeLabel}
              </span>
              <span style={{ background: "rgba(0,255,136,0.08)", border: "1px solid rgba(0,255,136,0.2)", color: "#00FF88", borderRadius: 20, padding: "3px 12px", fontSize: 13, fontWeight: 700 }}>
                {ageLabel}
              </span>
              <span style={{ background: "rgba(180,77,255,0.1)", border: "1px solid rgba(180,77,255,0.25)", color: "#B44DFF", borderRadius: 20, padding: "3px 12px", fontSize: 13, fontWeight: 700 }}>
                Free · No Login
              </span>
            </div>

            <h1 style={{ fontSize: "clamp(26px, 5vw, 42px)", fontWeight: 900, lineHeight: 1.15, marginBottom: 16 }}>
              Free Math Test –{" "}
              <span style={{ color: "#00D4FF" }}>{grade}{suffix} Grade</span>
              <br />
              <span style={{ fontSize: "0.6em", color: "rgba(255,255,255,0.45)", fontWeight: 400 }}>
                Online Practice · Instant Feedback · {ageLabel}
              </span>
            </h1>

            <p style={{ fontSize: 17, lineHeight: 1.75, color: "#c0c0e0", marginBottom: 28, maxWidth: 640 }}>
              {d.intro}
            </p>

            {/* CTA Button */}
            <Link href="/mathtest/" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "linear-gradient(90deg, #00D4FF, #B44DFF)",
              color: "white", fontWeight: 800, fontSize: 17,
              padding: "14px 32px", borderRadius: 12, textDecoration: "none",
            }}>
              🚀 Start {gradeLabel} Math Test
            </Link>
          </div>

          {/* Topics */}
          <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 16, color: "#00D4FF" }}>
            Topics in {gradeLabel} Math
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: 10, marginBottom: 40 }}>
            {d.topics.map((t, i) => (
              <div key={i} style={{ background: "#12122A", borderRadius: 10, padding: "14px 16px", display: "flex", alignItems: "center", gap: 10, border: "1px solid rgba(0,212,255,0.1)" }}>
                <span style={{ fontSize: 22 }}>{t.icon}</span>
                <span style={{ fontSize: 14, fontWeight: 600, color: "#d0d0f0" }}>{t.label}</span>
              </div>
            ))}
          </div>

          {/* Deep Dive */}
          <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 16, color: "#00D4FF" }}>
            {gradeLabel} Math in Depth
          </h2>
          {d.deepDive.map((para, i) => (
            <p key={i} style={{ lineHeight: 1.8, marginBottom: 18, color: "#c0c0e0", fontSize: 15 }}>{para}</p>
          ))}

          {/* CTA box */}
          <div style={{ background: "linear-gradient(135deg, #0d0d28, #12122A)", border: "2px solid #00D4FF", borderRadius: 16, padding: "32px", textAlign: "center", margin: "40px 0" }}>
            <p style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>Practice {gradeLabel} Math — Free</p>
            <p style={{ color: "#9090bb", marginBottom: 24, lineHeight: 1.6 }}>
              Unlimited questions · Instant feedback · No account needed · Works on any device
            </p>
            <Link href="/mathtest/" style={{
              display: "inline-block",
              background: "linear-gradient(90deg, #00D4FF, #B44DFF)",
              color: "white", fontWeight: 700, fontSize: 17,
              padding: "14px 36px", borderRadius: 10, textDecoration: "none",
            }}>
              Start Free Math Test →
            </Link>
          </div>

          {/* Other Grades */}
          <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 14, color: "rgba(255,255,255,0.7)" }}>
            Other Grade Levels
          </h2>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 40 }}>
            {[1, 2, 3, 4, 5, 6, 7, 8].filter(n => n !== grade).map(n => {
              const s = GRADE_DATA[n].suffix;
              return (
                <Link key={n} href={`/math-test/grade-${n}/`} style={{
                  background: "#12122A", border: "1px solid rgba(0,212,255,0.2)",
                  color: "#00D4FF", borderRadius: 8, padding: "7px 14px",
                  textDecoration: "none", fontSize: 14, fontWeight: 600,
                }}>
                  Grade {n}
                </Link>
              );
            })}
          </div>

          {/* Related Games */}
          <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 14, color: "rgba(255,255,255,0.7)" }}>
            Related Educational Games
          </h2>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 48 }}>
            {[
              { href: "/mathtest/", label: "🔢 Math Test" },
              { href: "/quickpick/", label: "⚡ Quick Pick" },
              { href: "/numberrush/", label: "🔥 Number Rush" },
              { href: "/wordscramble/", label: "🔤 Word Scramble" },
              { href: "/educational-games/", label: "📚 All Educational Games" },
            ].map(g => (
              <Link key={g.href} href={g.href} style={{
                background: "#12122A", border: "1px solid rgba(0,255,136,0.2)",
                color: "#00FF88", borderRadius: 8, padding: "7px 14px",
                textDecoration: "none", fontSize: 14, fontWeight: 600,
              }}>
                {g.label}
              </Link>
            ))}
          </div>

          {/* FAQ */}
          <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 20, color: "white" }}>
            Frequently Asked Questions
          </h2>
          {d.faqs.map((f, i) => (
            <div key={i} style={{ borderBottom: "1px solid #1a1a3a", paddingBottom: 18, marginBottom: 18 }}>
              <p style={{ fontWeight: 700, fontSize: 16, marginBottom: 8, color: "#e0e0ff" }}>{f.q}</p>
              <p style={{ color: "#9090bb", lineHeight: 1.75, fontSize: 15 }}>{f.a}</p>
            </div>
          ))}

        </div>
      </div>
    </>
  );
}
