'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "386faf1834f607472fcbad19a60340ed",
"assets/AssetManifest.bin.json": "7d954e118f7e773522615b416d207eba",
"assets/AssetManifest.json": "9dd57d1b64ba0c3e1a9fce508c2551ab",
"assets/assets/fonts/TikTokIcons.ttf": "30f7ddd76e285678d72e015a8d5cb26c",
"assets/FontManifest.json": "9310adba38921c9b5700e7fd6e648774",
"assets/fonts/iconfont.ttf": "644c3c6efd833f5196a967c6dbea4814",
"assets/fonts/iconfont1.ttf": "df2f64983917e3df768a63b122c9e090",
"assets/fonts/iconfont2.ttf": "5f042b9ae86cd112e1e2369d6ac590d6",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/images/1.png": "8f32d931f456c13886e0c3ef42ecac86",
"assets/images/2X/a.jpg": "0c8bf36e099654aadaf5f127ef1a3f1b",
"assets/images/2X/aa.jpg": "6181a27489386cbb11000acdedd86a98",
"assets/images/2X/AppLogo.png": "ecb429c5cea7a76d1f1372f07344a7f5",
"assets/images/2X/b.jpg": "b5673550e894050b3e7bc5d2586adcbc",
"assets/images/2X/bb.jpg": "5bbbfd3cb08d75800648d41390789a7f",
"assets/images/2X/c.jpg": "fe0f144847f068ebbf58a820e831008b",
"assets/images/2X/cc.png": "86ad0096d43ca379cd06b9dea3b27e32",
"assets/images/2X/d.jpg": "42e8daf464930871c104d539a4c6e564",
"assets/images/2X/dd.jpg": "926e1aa68aebee4a03bcf7da89448763",
"assets/images/2X/Doctor01.jpg": "c871834f4abb1f2d1e78755e1d07be97",
"assets/images/2X/e.jpg": "0353eb4ce3f1f00bff4d2a7aea9cead4",
"assets/images/2X/ee.jpg": "a480df4c2e71a0c81b7a0f3862bd11cc",
"assets/images/2X/f.jpg": "651306dc891e98faeb69a66897d2a0a3",
"assets/images/2X/ff.jpg": "d1ffcec2a8202418e31b62930f4f16b2",
"assets/images/2X/g.jpg": "a19b7a90e80cbd5577163b036898465f",
"assets/images/2X/gg.png": "8dad0e36f697c033f6e0f6e728d1c66f",
"assets/images/2X/h.jpg": "cb2e5a758c8fe9272bfdb025556fba0f",
"assets/images/2X/Headshot01.jpg": "49ebecaf5409093b0924abf3ac3c1840",
"assets/images/2X/Home01.png": "eb665dc8493ea769ceae9bcb201cfa41",
"assets/images/2X/Home02.jpg": "506ed54e308627ea57b4f6b9a0690aab",
"assets/images/2X/Home03.jpg": "876de2a65b85f75335cb74a13dbd8b98",
"assets/images/2X/i.jpg": "507b00b118e229e7b7240a7181b13532",
"assets/images/2X/j.jpg": "d898b72623c7bbc6c69bed1073b0c798",
"assets/images/2X/k.webp": "c6982c8d431eb5e854dba6fbd904df4b",
"assets/images/2X/l.jpg": "12deedb6417b99888178bf6b2b938413",
"assets/images/2X/Note01.jpg": "40d2ae33da8ea75a24d77333c07bd7d8",
"assets/images/2X/Note02.jpg": "c83ce4db9ce78322bf4cd38d8523e1ef",
"assets/images/2X/PetHotel01.jpg": "80c98042e11ca4401ed6fcbb0f58b799",
"assets/images/2X/PetHotel02.jpg": "36105404403722e78599fa1b2484894f",
"assets/images/2X/PetHotel03.jpg": "f67c4c01274018c6e302807acac8a579",
"assets/images/2X/profile1.png": "2362d7fcba770d771b77dc1912a69aca",
"assets/images/2X/Review01.jpg": "db00565aaa9d226647841a33808c4112",
"assets/images/2X/Service01.jpg": "99babe2aa1cd61097bf9397a8ff7e6f3",
"assets/images/2X/Service02.jpg": "9f8b884f48eeebc1f7ecbfc9de15feb0",
"assets/images/2X/Service03.jpg": "46b12d74fce89c1cf8b5dcf9b74721eb",
"assets/images/2X/Total01.jpg": "ebb0fef129be35ab57dd7f7e5ebb8f0c",
"assets/images/2X/Total02.jpg": "1095e33174fbd5cfc7787fdc262f9f3e",
"assets/images/3X/bao1.png": "e2559d7f8d75aee5f4b03d885b48ffba",
"assets/images/3X/bao2.png": "336e13a236e0b6857eb8927cf74d700b",
"assets/images/3X/bao3.png": "c882a388a0bcadb79a103ca599b02643",
"assets/images/3X/bao4.png": "3f5406fc04715c71b937eb5fa7cefd0e",
"assets/images/3X/bao5.png": "6492b5d4d75e9bfe5e5a9e50386c435a",
"assets/images/3X/Commodity01.jpg": "ec5995d24a7850c10f66acd2f2b9eb4d",
"assets/images/3X/Commodity02.jpg": "fe1b9e6749c0a27972cb81cdcc5da2ce",
"assets/images/3X/Commodity03.jpg": "a8c8fec8f4adb8bbcdeeac73ee0eb435",
"assets/images/3X/Commodity04.jpg": "26880500c2dea0fa260f01b669205abd",
"assets/images/3X/Commodity05.png": "e2559d7f8d75aee5f4b03d885b48ffba",
"assets/images/3X/Commodity06.jpg": "020e1c2145a14cc51e702f0bc6031c9a",
"assets/images/3X/dian1.jpg": "46cb3816cfdc712ff9b55868a0cd21a7",
"assets/images/3X/dian2.jpg": "301d57662bb9b3fea3253b7ccaa80de2",
"assets/images/3X/dian3.jpg": "194cfefa7ec3977001a9af8fc4345aef",
"assets/images/3X/dian4.jpg": "f5927a54d6eee18d3b57810cb141f387",
"assets/images/3X/dian5.jpg": "994f333c562f441a79d2ff4ebd6aed66",
"assets/images/3X/dian6.jpg": "6a1cf6b10ada1b82963c6f3716b54296",
"assets/images/3X/dian7.jpg": "c6ab29c2e6e745f22ab4868baf284dc5",
"assets/images/3X/dian8.jpg": "2ea3a77e1f164c869fc97458740ac8b3",
"assets/images/3X/Doctor01.jpg": "c871834f4abb1f2d1e78755e1d07be97",
"assets/images/3X/Environment01.jpg": "b817c2b9ce661ff1477f8af094ca8c0e",
"assets/images/3X/Environment02.jpg": "e3b0a50ee12e9acadd685cef2d6f13c0",
"assets/images/3X/Environment03.jpg": "70f895e418804f900c5d2ff1531447cf",
"assets/images/3X/Environment04.jpg": "0ff2d9367daf68214b81058369762c13",
"assets/images/3X/Environment05.jpg": "eab11e8c6c9157e007267b26739b4ad3",
"assets/images/3X/Food01.jpg": "1de778427eb97666853a154bddf6a608",
"assets/images/3X/Food02.jpg": "2ed8abfb7862195e61c76344d1b81206",
"assets/images/3X/Food03.jpg": "40a381006d54f2f72728879d37df037e",
"assets/images/3X/Food04.jpg": "326a68fe8f3db7062f583eca3dba0d71",
"assets/images/3X/Food05.jpg": "14bed7405ab9deeda60cac9697332a1b",
"assets/images/3X/Groom01.jpg": "d705d8fc8849b57ed9d4267d9887ea3f",
"assets/images/3X/Groom02.jpg": "e8e87edb52cfae3a1d147b7ff1fc2ff6",
"assets/images/3X/Groom03.jpg": "c69221777f1568d0081126b3312c8eeb",
"assets/images/3X/GroomEnvironment01.jpg": "2ea3a77e1f164c869fc97458740ac8b3",
"assets/images/3X/GroomEnvironment02.jpg": "0dc8affbc1cebcf85c1836ee359f1d23",
"assets/images/3X/GroomEnvironment03.jpg": "8a8b6e6076fe2bd979f72cda29e3e1ab",
"assets/images/3X/GroomEnvironment04.jpg": "0033462ff66810432695ca99707a3c98",
"assets/images/3X/GroomEnvironment05.jpg": "a9a1d72f0ccce24a07ce37116aef2a0e",
"assets/images/3X/GroomEnvironment06.jpg": "848f9a455ec7325c80dbb484f9b348c6",
"assets/images/3X/GroomService01.jpg": "2b23ed45791b896f070fd5adae53424f",
"assets/images/3X/GroomService02.jpg": "2ba910653292a167006799226f6873f0",
"assets/images/3X/GroomService03.jpg": "c4fce1c47f9ab95899bedc058a42fa60",
"assets/images/3X/Headshot01.jpg": "49ebecaf5409093b0924abf3ac3c1840",
"assets/images/3X/Headshot02.jpg": "fc440654c88c3c215697df8faf0d012c",
"assets/images/3X/Headshot03.jpg": "3c601a4b40000c680dab941032121573",
"assets/images/3X/Home01.png": "eb665dc8493ea769ceae9bcb201cfa41",
"assets/images/3X/Home02.jpg": "506ed54e308627ea57b4f6b9a0690aab",
"assets/images/3X/Home03.jpg": "876de2a65b85f75335cb74a13dbd8b98",
"assets/images/3X/HotelService01.jpg": "e456100376fa662e3399662c0a253279",
"assets/images/3X/HotelService02.jpg": "d7705e514bacac03b6ecaa525c2c210a",
"assets/images/3X/HotelService03.jpg": "bbc463c3d36f66321d0f45879e1691c9",
"assets/images/3X/Note01.jpg": "40d2ae33da8ea75a24d77333c07bd7d8",
"assets/images/3X/Note02.jpg": "c83ce4db9ce78322bf4cd38d8523e1ef",
"assets/images/3X/PetGroom01.png": "78b8fa5c0f8b26a3c86b672f6eb4d5a3",
"assets/images/3X/PetGroom02.jpg": "2c0088961bc72cd6f7e2c99892bd9819",
"assets/images/3X/PetGroom03.jpg": "42a0e45741c6ef57cfc855d387245665",
"assets/images/3X/PetGroom04.jpg": "e1512dc13c7007163ac686f8dc146f8a",
"assets/images/3X/PetHotel01.jpg": "80c98042e11ca4401ed6fcbb0f58b799",
"assets/images/3X/PetHotel02.jpg": "36105404403722e78599fa1b2484894f",
"assets/images/3X/PetHotel03.jpg": "f67c4c01274018c6e302807acac8a579",
"assets/images/3X/PetHotel04.jpg": "c6ab9e23c45d7bc8a49ea3bb41afe507",
"assets/images/3X/Review01.jpg": "db00565aaa9d226647841a33808c4112",
"assets/images/3X/Review02.jpg": "96525cc995faf79e24532a5068d45bfd",
"assets/images/3X/Review03.jpg": "644528fcdb1aee823d6b78e8080a191d",
"assets/images/3X/Review04.jpg": "2b514b17b01173b3f6b1d8e84c38b80d",
"assets/images/3X/Review05.jpg": "966b0df32c9db01a827ec1f62a776dfd",
"assets/images/3X/Review06.jpg": "9bd03e46321900f3cabc013f28867cdc",
"assets/images/3X/Service01.jpg": "99babe2aa1cd61097bf9397a8ff7e6f3",
"assets/images/3X/Service02.jpg": "9f8b884f48eeebc1f7ecbfc9de15feb0",
"assets/images/3X/Service03.jpg": "46b12d74fce89c1cf8b5dcf9b74721eb",
"assets/images/3X/Service04.jpg": "18b74209bb75d48bc586631f4d8ddd04",
"assets/images/3X/Service05.jpg": "d447a0c395f6c8c8c1631991395f0850",
"assets/images/3X/Service06.jpg": "a28033ad7333c671403df1157f607b37",
"assets/images/3X/Service07.jpg": "fcfa6c4c6a9d37a518aaf7aa1af96320",
"assets/images/3X/Service08.jpg": "9bc3835337dc45a3e73c0ee3071f1511",
"assets/images/3X/Total01.jpg": "ebb0fef129be35ab57dd7f7e5ebb8f0c",
"assets/images/3X/Total02.jpg": "1095e33174fbd5cfc7787fdc262f9f3e",
"assets/images/4X/a.jpg": "0c8bf36e099654aadaf5f127ef1a3f1b",
"assets/images/4X/aa.jpg": "6181a27489386cbb11000acdedd86a98",
"assets/images/4X/appoitment1.jpg": "3bc58f10af3e5cf592ea9c694bb9fb3b",
"assets/images/4X/appoitment2.jpg": "905464942b0133f0ea2438bb4a51043e",
"assets/images/4X/appoitment3.jpg": "bfb4be1634db6d5e2ab5191cccf37868",
"assets/images/4X/appoitment4.jpg": "6bc2f2b5a9afb00fd82b2c2977946c1b",
"assets/images/4X/appoitment5.jpg": "7c9bcace5aebd216b86b793fc1f050b9",
"assets/images/4X/appoitment6.jpg": "2b7b0e727a03d0076785479fb6d9804b",
"assets/images/4X/b.jpg": "b5673550e894050b3e7bc5d2586adcbc",
"assets/images/4X/bb.jpg": "5bbbfd3cb08d75800648d41390789a7f",
"assets/images/4X/c.jpg": "fe0f144847f068ebbf58a820e831008b",
"assets/images/4X/cc.png": "86ad0096d43ca379cd06b9dea3b27e32",
"assets/images/4X/d.jpg": "42e8daf464930871c104d539a4c6e564",
"assets/images/4X/dd.jpg": "926e1aa68aebee4a03bcf7da89448763",
"assets/images/4X/Doctor01.jpg": "c871834f4abb1f2d1e78755e1d07be97",
"assets/images/4X/e.jpg": "0353eb4ce3f1f00bff4d2a7aea9cead4",
"assets/images/4X/ee.jpg": "a480df4c2e71a0c81b7a0f3862bd11cc",
"assets/images/4X/f.jpg": "651306dc891e98faeb69a66897d2a0a3",
"assets/images/4X/ff.jpg": "d1ffcec2a8202418e31b62930f4f16b2",
"assets/images/4X/food1.jpg": "326a68fe8f3db7062f583eca3dba0d71",
"assets/images/4X/food2.jpg": "7a20354e909cd2931235d41fc3767b8c",
"assets/images/4X/food3.jpg": "34953076342fd5830c7101af77b4f42e",
"assets/images/4X/food4.jpg": "1de778427eb97666853a154bddf6a608",
"assets/images/4X/food5.jpg": "1f3881689284e44b730e8acf4f2129de",
"assets/images/4X/food6.jpg": "2ed8abfb7862195e61c76344d1b81206",
"assets/images/4X/g.jpg": "a19b7a90e80cbd5577163b036898465f",
"assets/images/4X/gg.png": "8dad0e36f697c033f6e0f6e728d1c66f",
"assets/images/4X/h.jpg": "cb2e5a758c8fe9272bfdb025556fba0f",
"assets/images/4X/Headshot01.jpg": "49ebecaf5409093b0924abf3ac3c1840",
"assets/images/4X/hen1.jpg": "f1e552a91934740b6f3212e1c0d446f9",
"assets/images/4X/hen2.jpg": "240329dfefaf9729b52b99d677b1cf47",
"assets/images/4X/hen3.jpg": "a1b9ba61068f1cdaff5ecf54c6d0c265",
"assets/images/4X/Home01.png": "eb665dc8493ea769ceae9bcb201cfa41",
"assets/images/4X/Home02.jpg": "506ed54e308627ea57b4f6b9a0690aab",
"assets/images/4X/Home03.jpg": "876de2a65b85f75335cb74a13dbd8b98",
"assets/images/4X/hos1.png": "c34cfca940d41938a8e7aa00681520d2",
"assets/images/4X/hos2.png": "9db187ea8c03eb16e1e868c785f9ecf5",
"assets/images/4X/hos3.png": "74b556b07d713dfb76bf87d053cb0a45",
"assets/images/4X/hos4.jpg": "b021d0045fe5f9ea2ddd157dc86f63a4",
"assets/images/4X/hos5.jpg": "d1cea5e2c76c7218c9fd30eb5b0a29ee",
"assets/images/4X/hos6.png": "0e91b463ca375048f3a1a0f7be467f8a",
"assets/images/4X/i.jpg": "507b00b118e229e7b7240a7181b13532",
"assets/images/4X/j.jpg": "d898b72623c7bbc6c69bed1073b0c798",
"assets/images/4X/k.webp": "c6982c8d431eb5e854dba6fbd904df4b",
"assets/images/4X/l.jpg": "12deedb6417b99888178bf6b2b938413",
"assets/images/4X/Note01.jpg": "40d2ae33da8ea75a24d77333c07bd7d8",
"assets/images/4X/Note02.jpg": "c83ce4db9ce78322bf4cd38d8523e1ef",
"assets/images/4X/PetHotel01.jpg": "80c98042e11ca4401ed6fcbb0f58b799",
"assets/images/4X/PetHotel02.jpg": "36105404403722e78599fa1b2484894f",
"assets/images/4X/PetHotel03.jpg": "f67c4c01274018c6e302807acac8a579",
"assets/images/4X/Review01.jpg": "db00565aaa9d226647841a33808c4112",
"assets/images/4X/Service01.jpg": "99babe2aa1cd61097bf9397a8ff7e6f3",
"assets/images/4X/Service02.jpg": "9f8b884f48eeebc1f7ecbfc9de15feb0",
"assets/images/4X/Service03.jpg": "46b12d74fce89c1cf8b5dcf9b74721eb",
"assets/images/4X/service4pg": "6bc2f2b5a9afb00fd82b2c2977946c1b",
"assets/images/4X/Total01.jpg": "ebb0fef129be35ab57dd7f7e5ebb8f0c",
"assets/images/4X/Total02.jpg": "1095e33174fbd5cfc7787fdc262f9f3e",
"assets/images/4X/yao1.jpg": "e3893e6e1e3c9da6122248dded9b621f",
"assets/images/4X/yao2.png": "53c28673001a99f1a0031133804a31d8",
"assets/images/4X/yao3.jpg": "d4f17a99c65c7b04767dd673bc8ba3df",
"assets/images/4X/yao4.jpg": "c624909348a511dd58e500249dcced50",
"assets/images/4X/yao5.jpg": "c035ddc2549b61c6960b5fa3ad01f035",
"assets/images/4X/yao6.jpg": "e031941be704b6b38ad4afb04d9c4aea",
"assets/images/4X/yao7.jpg": "cc3f46697e45abc4d7dacce69a6cb804",
"assets/images/4X/yao8.jpg": "245c741a2d4671c8cea5bbe47460d4ec",
"assets/images/4X/yao9.jpg": "0536376f32ea440246de292294fafb12",
"assets/images/5X/boarding1.jpg": "62a96d83533abe2faf1af739db7b05ab",
"assets/images/5X/boarding2.jpg": "047ba22f52cf769814d39e6046d2b792",
"assets/images/5X/boarding3.jpg": "5a5db1e827a45698c45f30548e94e00d",
"assets/images/5X/Commodity01.jpg": "ec5995d24a7850c10f66acd2f2b9eb4d",
"assets/images/5X/Commodity02.jpg": "fe1b9e6749c0a27972cb81cdcc5da2ce",
"assets/images/5X/Commodity03.jpg": "a8c8fec8f4adb8bbcdeeac73ee0eb435",
"assets/images/5X/Commodity04.jpg": "26880500c2dea0fa260f01b669205abd",
"assets/images/5X/Commodity05.png": "e2559d7f8d75aee5f4b03d885b48ffba",
"assets/images/5X/Commodity06.jpg": "020e1c2145a14cc51e702f0bc6031c9a",
"assets/images/5X/Doctor01.jpg": "c871834f4abb1f2d1e78755e1d07be97",
"assets/images/5X/Environment01.jpg": "b817c2b9ce661ff1477f8af094ca8c0e",
"assets/images/5X/Environment02.jpg": "e3b0a50ee12e9acadd685cef2d6f13c0",
"assets/images/5X/Environment03.jpg": "70f895e418804f900c5d2ff1531447cf",
"assets/images/5X/Environment04.jpg": "0ff2d9367daf68214b81058369762c13",
"assets/images/5X/Environment05.jpg": "eab11e8c6c9157e007267b26739b4ad3",
"assets/images/5X/Food01.jpg": "1de778427eb97666853a154bddf6a608",
"assets/images/5X/Food02.jpg": "2ed8abfb7862195e61c76344d1b81206",
"assets/images/5X/Food03.jpg": "40a381006d54f2f72728879d37df037e",
"assets/images/5X/Food04.jpg": "326a68fe8f3db7062f583eca3dba0d71",
"assets/images/5X/Food05.jpg": "14bed7405ab9deeda60cac9697332a1b",
"assets/images/5X/Groom01.jpg": "d705d8fc8849b57ed9d4267d9887ea3f",
"assets/images/5X/Groom02.jpg": "e8e87edb52cfae3a1d147b7ff1fc2ff6",
"assets/images/5X/Groom03.jpg": "c69221777f1568d0081126b3312c8eeb",
"assets/images/5X/GroomEnvironment01.jpg": "2ea3a77e1f164c869fc97458740ac8b3",
"assets/images/5X/GroomEnvironment02.jpg": "0dc8affbc1cebcf85c1836ee359f1d23",
"assets/images/5X/GroomEnvironment03.jpg": "8a8b6e6076fe2bd979f72cda29e3e1ab",
"assets/images/5X/GroomEnvironment04.jpg": "0033462ff66810432695ca99707a3c98",
"assets/images/5X/GroomEnvironment05.jpg": "a9a1d72f0ccce24a07ce37116aef2a0e",
"assets/images/5X/GroomEnvironment06.jpg": "848f9a455ec7325c80dbb484f9b348c6",
"assets/images/5X/GroomService01.jpg": "2b23ed45791b896f070fd5adae53424f",
"assets/images/5X/GroomService02.jpg": "2ba910653292a167006799226f6873f0",
"assets/images/5X/GroomService03.jpg": "c4fce1c47f9ab95899bedc058a42fa60",
"assets/images/5X/Headshot01.jpg": "49ebecaf5409093b0924abf3ac3c1840",
"assets/images/5X/Headshot02.jpg": "fc440654c88c3c215697df8faf0d012c",
"assets/images/5X/Headshot03.jpg": "3c601a4b40000c680dab941032121573",
"assets/images/5X/Home01.png": "eb665dc8493ea769ceae9bcb201cfa41",
"assets/images/5X/Home02.jpg": "506ed54e308627ea57b4f6b9a0690aab",
"assets/images/5X/Home03.jpg": "876de2a65b85f75335cb74a13dbd8b98",
"assets/images/5X/HotelService01.jpg": "e456100376fa662e3399662c0a253279",
"assets/images/5X/Note01.jpg": "40d2ae33da8ea75a24d77333c07bd7d8",
"assets/images/5X/Note02.jpg": "c83ce4db9ce78322bf4cd38d8523e1ef",
"assets/images/5X/PetGroom01.png": "78b8fa5c0f8b26a3c86b672f6eb4d5a3",
"assets/images/5X/PetGroom02.jpg": "2c0088961bc72cd6f7e2c99892bd9819",
"assets/images/5X/PetGroom03.jpg": "42a0e45741c6ef57cfc855d387245665",
"assets/images/5X/PetGroom04.jpg": "e1512dc13c7007163ac686f8dc146f8a",
"assets/images/5X/PetHotel01.jpg": "80c98042e11ca4401ed6fcbb0f58b799",
"assets/images/5X/PetHotel02.jpg": "36105404403722e78599fa1b2484894f",
"assets/images/5X/PetHotel03.jpg": "f67c4c01274018c6e302807acac8a579",
"assets/images/5X/PetHotel04.jpg": "c6ab9e23c45d7bc8a49ea3bb41afe507",
"assets/images/5X/Review01.jpg": "db00565aaa9d226647841a33808c4112",
"assets/images/5X/Review02.jpg": "96525cc995faf79e24532a5068d45bfd",
"assets/images/5X/Review03.jpg": "644528fcdb1aee823d6b78e8080a191d",
"assets/images/5X/Review04.jpg": "2b514b17b01173b3f6b1d8e84c38b80d",
"assets/images/5X/Review05.jpg": "966b0df32c9db01a827ec1f62a776dfd",
"assets/images/5X/Review06.jpg": "9bd03e46321900f3cabc013f28867cdc",
"assets/images/5X/Service01.jpg": "99babe2aa1cd61097bf9397a8ff7e6f3",
"assets/images/5X/Service02.jpg": "9f8b884f48eeebc1f7ecbfc9de15feb0",
"assets/images/5X/Service03.jpg": "46b12d74fce89c1cf8b5dcf9b74721eb",
"assets/images/5X/Service04.jpg": "18b74209bb75d48bc586631f4d8ddd04",
"assets/images/5X/Service05.jpg": "d447a0c395f6c8c8c1631991395f0850",
"assets/images/5X/Service06.jpg": "a28033ad7333c671403df1157f607b37",
"assets/images/5X/Service07.jpg": "fcfa6c4c6a9d37a518aaf7aa1af96320",
"assets/images/5X/Service08.jpg": "9bc3835337dc45a3e73c0ee3071f1511",
"assets/images/5X/Total01.jpg": "ebb0fef129be35ab57dd7f7e5ebb8f0c",
"assets/images/5X/Total02.jpg": "1095e33174fbd5cfc7787fdc262f9f3e",
"assets/images/adoption_images/1.png": "8f32d931f456c13886e0c3ef42ecac86",
"assets/images/adoption_images/customer_service.png": "739cfe64cd677d98d77a9d290b6992f5",
"assets/images/adoption_images/jinmao.png": "b1770ace02890f7b41066e9c9fee0877",
"assets/images/boarding_images/Doctor01.jpg": "c871834f4abb1f2d1e78755e1d07be97",
"assets/images/boarding_images/Headshot01.jpg": "49ebecaf5409093b0924abf3ac3c1840",
"assets/images/boarding_images/Note01.jpg": "40d2ae33da8ea75a24d77333c07bd7d8",
"assets/images/boarding_images/PetHotel01.jpg": "80c98042e11ca4401ed6fcbb0f58b799",
"assets/images/boarding_images/PetHotel02.jpg": "36105404403722e78599fa1b2484894f",
"assets/images/boarding_images/PetHotel03.jpg": "f67c4c01274018c6e302807acac8a579",
"assets/images/boarding_images/Review01.jpg": "db00565aaa9d226647841a33808c4112",
"assets/images/boarding_images/Service01.jpg": "99babe2aa1cd61097bf9397a8ff7e6f3",
"assets/images/boarding_images/Service02.jpg": "9f8b884f48eeebc1f7ecbfc9de15feb0",
"assets/images/boarding_images/Service03.jpg": "46b12d74fce89c1cf8b5dcf9b74721eb",
"assets/images/boarding_images/Total01.jpg": "ebb0fef129be35ab57dd7f7e5ebb8f0c",
"assets/images/boarding_images/Total02.jpg": "1095e33174fbd5cfc7787fdc262f9f3e",
"assets/images/chat_images/img1.png": "4e7ca2382f690101c1f8bfc5e170d929",
"assets/images/chat_images/img2.png": "799bd723b23510c9f90c6397a5862021",
"assets/images/chat_images/img3.png": "bf6e93c1e4f34f061ccfd68df9732ff6",
"assets/images/chat_images/img4.png": "099be596d0c22c9c0dad25a0822c8efe",
"assets/images/chat_images/img5.png": "96d14d25d2f315bff15c1a1f8e1b1eb3",
"assets/images/chat_images/img6.png": "e941a1497fbec0f86702a159ce940745",
"assets/images/chat_images/img7.png": "2355c56173417bf5d1daaff7f84d7c21",
"assets/images/chat_images/img8.png": "1f74ccd1398eca89b110dc5fc21aad20",
"assets/images/customer_service.png": "739cfe64cd677d98d77a9d290b6992f5",
"assets/images/Doctor_images/doctor1.jpg": "1d18455848df685f1d8136d3025796c0",
"assets/images/Doctor_images/doctor2.jpg": "83e1513c0c6f3a4fd03f0b16b18677e6",
"assets/images/Doctor_images/doctor3.jpg": "a3a2632119d7de143ad88af1dd97f0cc",
"assets/images/Doctor_images/doctor4.jpg": "bb1c135bd1e3450b15c29af65b8dec96",
"assets/images/Doctor_images/doctor5.jpg": "354d08ce6a834b4372dc36599f308e20",
"assets/images/Doctor_images/doctor6.jpg": "18a147fef98b9d2c1f1d685e2e721f5e",
"assets/images/Email_logo.png": "419f46d1bda02bb74d91f18d24302f7b",
"assets/images/Facebook_logo_(square).png": "7c003ed44a938a734c8aaffc9f3de454",
"assets/images/homePage/details0.jpg": "c5e3571221e1fc80a2f9059f67aa05d6",
"assets/images/homePage/details1.jpg": "b060e627712bc2ca9f99f9c392818e2a",
"assets/images/homePage/details2.jpg": "d284a1e03454144c07b0064a62ddb72e",
"assets/images/homePage/details3.png": "73df297b5ba616ae0656de2d68005ae2",
"assets/images/homePage/details4.jpg": "fe906cb03354bd2e92556ccfc28dbd51",
"assets/images/homePage/details5.jpg": "b32593a2913209e9423771c51a42561c",
"assets/images/homePage/details6.png": "d9418083e8eed630436127e548125272",
"assets/images/homePage/details7.png": "990641588bb3c4699a0e99506dbcb75f",
"assets/images/homePage/followed0.png": "b22382e2ad7ad797112892d4b4f77186",
"assets/images/homePage/followed1.png": "7ae18d45cf22eb988052dc0711be99b7",
"assets/images/homePage/followed2.png": "293623b00028836d3ca85e659d093209",
"assets/images/homePage/followed3.png": "07e30f93c8a6b2fde00cbda06fc46f77",
"assets/images/homePage/recomended0.jpg": "47adb198630760fa8744f9e17706917a",
"assets/images/homePage/recomended1.jpg": "080ab91c10cd897e7c08e922e056251d",
"assets/images/homePage/recomended2.jpg": "0791ba20d6c3c2d66735060e953af8e0",
"assets/images/homePage/recomended3.jpg": "3c601a4b40000c680dab941032121573",
"assets/images/hqUNi.png": "e84846474891b759bd069ec70d046220",
"assets/images/img.png": "7e5ed31c659ef17139caba27edfbb6b2",
"assets/images/img_1.png": "7e5ed31c659ef17139caba27edfbb6b2",
"assets/images/img_2.png": "2d7bed60d6c3c471a305c03a24d2fbe8",
"assets/images/Instagram-Icon.png": "54d1b577e38083491074cca32ddd4e2d",
"assets/images/lachao_images/1.jpg": "302196ecd709b7209e2b357f9f25193e",
"assets/images/lachao_images/2.jpg": "0cb2ff945e880ebc9356d3c9a8f94f88",
"assets/images/lachao_images/3.jpg": "534a8714e1af5b62a354b638e4a27ab9",
"assets/images/lachao_images/4.jpg": "ab9ffcfa867985c067c8669f02fb6f94",
"assets/images/Mallimages/fuli1.png": "f3bf090bd7207031e45d4ed40ce3255d",
"assets/images/Mallimages/fuli2.png": "e406ff76513ab3a595f749d8c95154f4",
"assets/images/Mallimages/fuli3.png": "e2559d7f8d75aee5f4b03d885b48ffba",
"assets/images/Mallimages/fuli4.png": "4c5fce7dfe9455c25692c6e383ba0aae",
"assets/images/Mallimages/fuli5.png": "9f7534e28fb4e9ae3e163919bfc8c230",
"assets/images/Mallimages/fuli6.jpg": "fc61ea99bd36adc93ab3f23d7867bacf",
"assets/images/Mallimages/item1.png": "97c67a6e5f882d79e312c9fd1a26e923",
"assets/images/Mallimages/item10.png": "4f2e4ffa8a2e99bf6f22b688806b83e7",
"assets/images/Mallimages/item2.png": "c8c527b6d1cbaa9949a2a33b4d57a998",
"assets/images/Mallimages/item3.png": "336e13a236e0b6857eb8927cf74d700b",
"assets/images/Mallimages/item4.png": "bb0442421cb9982ec134550e390dcae4",
"assets/images/Mallimages/item5.jpg": "6b9d0a750d6a465e258502cc9c3d251a",
"assets/images/Mallimages/item6.png": "c882a388a0bcadb79a103ca599b02643",
"assets/images/Mallimages/item7.png": "3f5406fc04715c71b937eb5fa7cefd0e",
"assets/images/Mallimages/item8.png": "6492b5d4d75e9bfe5e5a9e50386c435a",
"assets/images/Mallimages/item9.png": "7008eff5789fcde99e5fba3d183fce35",
"assets/images/mall_images/cat.png": "f62999a5df1019644735f2708aeeeb79",
"assets/images/mall_images/dog.png": "b13ad9e314efe74583d4d3fa43ec4ff9",
"assets/images/mall_images/fish.png": "76248cd66e0341525e55dedaa0bb0647",
"assets/images/mall_images/rat.png": "4a7926b5f9fc3319ffac796f062bf8d6",
"assets/images/myPetProfile.png": "de4bf210c53a913c0ca3d4aaf0ad0ed0",
"assets/images/new/a.jpg": "d1ccb3326bfd29b01ae9a9321f0fbb0e",
"assets/images/new/a1.png": "505b265f1ff2f167aa11b4da8c1d782d",
"assets/images/new/a10.jpg": "c66bc8c7224ce2599720d546371f8211",
"assets/images/new/a2.jpg": "bbcaed40c12473961e898e0cfc1e3861",
"assets/images/new/a3.jpg": "8d213ee197a3c43dc901d3ab1e7ad6e2",
"assets/images/new/a4.jpg": "70ae85f55750625618b1769b94b97457",
"assets/images/new/a5.jpg": "148860a7436815727a546bb83c4d1553",
"assets/images/new/a6.png": "4d18810f64c28486905bf8175b097759",
"assets/images/new/a7.jpg": "f5139d3dde75e5a886565dfa79a92124",
"assets/images/new/a8.jpg": "674455664ef7da04038758695fc1ccff",
"assets/images/new/a9.jpg": "e74bc0588cf656aa1f97da171f5f5874",
"assets/images/new/aaa.jpg": "e3ee28463179dd6c93daccf3d148d340",
"assets/images/new/b1.jpg": "519156fe125934733498ac7c777b2d62",
"assets/images/new/b2.jpg": "8e088376d22cbc565c19044a3cd857f0",
"assets/images/new/b3.jpg": "d963b85558c648e062ce3e4d1861e479",
"assets/images/new/b4.jpg": "778e5667718410421796bb674d545b8e",
"assets/images/new/b5.jpg": "39d542c90a39a61ffa133a44f5e410dd",
"assets/images/new/b6.jpg": "948991c79ed33bb5429a7c7058687852",
"assets/images/new/b7.jpg": "69ae7c67047cf6d0eae5cf07d5ca121c",
"assets/images/new/b8.jpg": "4ff41f36bc006b7c24b557a6d45b321b",
"assets/images/new/background.png": "e07323c2e20bc577b071b9bdec1f4cf2",
"assets/images/new/cat.png": "35ba0172de160c4d180f3525a94e8c78",
"assets/images/new/dog.png": "a9ddd53b5ed48a906265cd06e9bf7cb8",
"assets/images/new/img.png": "0645ea763d18a06763ea6df6b45600b2",
"assets/images/new/map.png": "2c390db07f72bd2d91903216216f6811",
"assets/images/new/otherpet.png": "390f127b79534768e0bd011d95f940cb",
"assets/images/new/picture1.png": "e4c28ed0a117487866705258adb9a6d9",
"assets/images/new/picture2.png": "d457cd67e1d7c327351247e22aa931fc",
"assets/images/new/picture3.png": "18774e0946e8d21bc65d51f98c4a46c2",
"assets/images/new/problem.png": "af0a3b226aedd36dee6856cd8f7ed987",
"assets/images/new/save.png": "bde74d41799a9b3a6ca64bedbe2e2091",
"assets/images/profile.png": "01d63b3f73ebaa7de6df572d3b2438b0",
"assets/images/QQ_logo.png": "f9972175b6ebee4f9aaafa2e3759c29d",
"assets/images/training_images/345.png": "ead682a093d4130ac32d4a09db7ef6f0",
"assets/images/Videos/cat1.mp4": "ce992411b52b5577ce34db04b403ace8",
"assets/images/Videos/cat2.mp4": "42effc39110595ff504878c32840690b",
"assets/images/Videos/dog1.mp4": "6840985963c7407c2de56ecce9750100",
"assets/images/Videos/dog2.mp4": "ae0abce0294f5146a5fc7ff370216e89",
"assets/images/Videos/fish1.mp4": "ad29309bd96e7927b4d287059ae640e8",
"assets/images/Videos/fish2.mp4": "dc7b4cd93e43b4911197291efd9aeda9",
"assets/images/Videos/videos1.mp4": "6c4330d984a2d7803ee1ba84c76059fc",
"assets/images/Videos/videos10.mp4": "fa3fc54a03d870155e355d20a982c03a",
"assets/images/Videos/videos11.mp4": "d33737849e61ec2f5e6d0fa2262fb713",
"assets/images/Videos/videos12.mp4": "648fbed4a44ab649db9ece7886cc0301",
"assets/images/Videos/videos13.mp4": "f875a6df81652148ce1e44f74c06ee12",
"assets/images/Videos/videos14.mp4": "e862aa158e82a026f1944cb683203e8c",
"assets/images/Videos/videos15.mp4": "7e690ac0b83c36cb919d09886ff184bf",
"assets/images/Videos/videos16.mp4": "8d035a966a71bfdd4903908a6b1bd566",
"assets/images/Videos/videos17.mp4": "011f7c73550dea1fafc9700d1d3f029b",
"assets/images/Videos/videos18.mp4": "100dcf038cc56f7e2b4daba31f65e882",
"assets/images/Videos/videos19.mp4": "100dcf038cc56f7e2b4daba31f65e882",
"assets/images/Videos/videos2.mp4": "913f2a9726c8ef4f5cd9491c7a6dfc40",
"assets/images/Videos/videos20.mp4": "23414dfaeb9a03c899e0651fc1e2c4ad",
"assets/images/Videos/videos21.mp4": "641954faf45cdb5bc6fd8a6a88ed9a5b",
"assets/images/Videos/videos3.mp4": "400616b8ba86202a23ccf0d2afacffea",
"assets/images/Videos/videos4.mp4": "29339904b20a0006f88f31e28bd8e3bc",
"assets/images/Videos/videos5.mp4": "f911d2ff226fe72ea6321e322d4a9172",
"assets/images/Videos/videos6.mp4": "260856bc97e7300a47f2a2cf58d7e5e7",
"assets/images/Videos/videos7.mp4": "68c11df16843dad78298a18ff3d37fdb",
"assets/images/Videos/videos8.mp4": "937baa6922fe5966387ee49b28ce35ff",
"assets/images/Videos/videos9.mp4": "470d037abf17fb4efb8a6aca4cc228ad",
"assets/images/Wechat_logo.png": "14f91218511df1ff39e7fe94f3247265",
"assets/NOTICES": "2a9d2a76c717267468743877c6a77635",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "4d0a61653ab3f2d13b9be3c413f1f0f4",
"/": "4d0a61653ab3f2d13b9be3c413f1f0f4",
"main.dart.js": "0b6a61782b9051194ac09d620fa70d33",
"manifest.json": "3fc29f9294b755bca0378065b89e216e",
"version.json": "11e1a177d57c5da2bc6e3a6acc3010f4"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
