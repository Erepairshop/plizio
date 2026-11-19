import importlib.util,json,tempfile,unittest
from pathlib import Path
spec=importlib.util.spec_from_file_location('refresh',Path(__file__).with_name('refresh-image-manifest.py'))
m=importlib.util.module_from_spec(spec);spec.loader.exec_module(m)
class ImageManifestTests(unittest.TestCase):
    def test_remote_only_local_and_tombstone(self):
        with tempfile.TemporaryDirectory() as tmp:
            root=Path(tmp);shared=root/'shared';state=root/'state';state.mkdir();(shared/'poi-images').mkdir(parents=True)
            (shared/'poi-images/local.webp').write_bytes(b'valid-local-placeholder')
            (shared/'poi-images/empty.webp').write_bytes(b'')
            (state/'poi-images-catalogue.json').write_text(json.dumps({'version':1,'family':'poi-images','files':{'remote.webp':{'size':100,'verifiedAt':1},'removed.webp':{'size':100,'verifiedAt':1},'unverified.webp':{'size':100},'sights/nested.webp':{'size':100,'verifiedAt':1}}}))
            (state/'tombstones.json').write_text(json.dumps({'keys':['poi-images/removed.webp']}))
            output=root/'manifest.json';output.write_text('["previous.webp"]')
            self.assertEqual(m.refresh(shared,state,output,min_count=1),2)
            self.assertEqual(json.loads(output.read_text()),['local.webp','remote.webp'])
    def test_bad_catalogue_and_missing_coverage_preserve_output(self):
        with tempfile.TemporaryDirectory() as tmp:
            root=Path(tmp);state=root/'state';state.mkdir();output=root/'manifest.json';output.write_text('["keep.webp"]')
            with self.assertRaises(ValueError):m.refresh(root/'missing',state,output)
            self.assertEqual(output.read_text(),'["keep.webp"]')
            (state/'poi-images-catalogue.json').write_text('{broken')
            with self.assertRaises(ValueError):m.refresh(root/'missing',state,output)
            self.assertEqual(output.read_text(),'["keep.webp"]')
if __name__=='__main__':unittest.main()
