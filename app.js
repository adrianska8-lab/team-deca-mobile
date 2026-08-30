// ===================== DATA (banco TACO — idêntico ao desktop) =====================
const DEFAULT_FOODS = [
  // Genéricos originais
  {name:'Ovos',            cal:146, carb:0.6,  prot:13.3, fat:9.5,   unit:'g',     calcMode:'per100'},
  {name:'Ovo (unidade)',   cal:146, carb:0.6,  prot:13.3, fat:9.5,   unit:'un',    calcMode:'wpu', wpu:50},
  {name:'Pão fatiado',     cal:253, carb:46.5, prot:7.9,  fat:3.4,   unit:'fatia', calcMode:'wpu', wpu:25},
  {name:'Queijo mussarela',cal:308, carb:2.2,  prot:22.7, fat:23.5,  unit:'g',     calcMode:'per100'},
  {name:'Mamão',           cal:45,  carb:11.4, prot:0.8,  fat:0.1,   unit:'g',     calcMode:'per100'},
  {name:'Arroz branco cozido', cal:128, carb:28.1, prot:2.5, fat:0.2, unit:'g',   calcMode:'per100'},
  {name:'Patinho moído cru',   cal:221, carb:0.0,  prot:18.7, fat:16.1, unit:'g', calcMode:'per100'},
  {name:'Azeite de oliva', cal:884, carb:0.0,  prot:0.0,  fat:100.0, unit:'ml',   calcMode:'per100'},
  {name:'Frango peito cozido', cal:163, carb:0.0,  prot:32.1, fat:2.8, unit:'g',  calcMode:'per100'},
  {name:'Macarrão cozido', cal:150, carb:30.1, prot:4.7,  fat:0.9,   unit:'g',    calcMode:'per100'},
  {name:'Whey Protein',    cal:370, carb:7.0,  prot:74.0, fat:5.0,   unit:'scoop',calcMode:'wpu', wpu:30},
  {name:'Aveia em flocos', cal:394, carb:67.5, prot:13.9, fat:8.5,   unit:'g',    calcMode:'per100'},

  // TACO — tabela completa (591 itens, 4a edicao UNICAMP) — inclui fibra, sodio, calcio, ferro e potassio quando disponiveis
  {name:'Arroz integral cozido', cal:123.53, carb:25.81, prot:2.59, fat:1, unit:'g', calcMode:'per100', taco:true, fiber:2.75, sodium:1.24, calcium:5.2, iron:0.26, potassium:75.15},
  {name:'Arroz integral cru', cal:359.68, carb:77.45, prot:7.32, fat:1.86, unit:'g', calcMode:'per100', taco:true, fiber:4.82, sodium:1.65, calcium:7.82, iron:0.95, potassium:173.34},
  {name:'Arroz tipo 1 cozido', cal:128.26, carb:28.06, prot:2.52, fat:0.23, unit:'g', calcMode:'per100', taco:true, fiber:1.56, sodium:1.2, calcium:3.54, iron:0.08, potassium:14.67},
  {name:'Arroz tipo 1 cru', cal:357.79, carb:78.76, prot:7.16, fat:0.34, unit:'g', calcMode:'per100', taco:true, fiber:1.64, sodium:1.02, calcium:4.41, iron:0.68, potassium:62.5},
  {name:'Arroz tipo 2 cozido', cal:130.12, carb:28.19, prot:2.57, fat:0.36, unit:'g', calcMode:'per100', taco:true, fiber:1.07, sodium:1.96, calcium:3.33, iron:0.05, potassium:20.2},
  {name:'Arroz tipo 2 cru', cal:358.12, carb:78.88, prot:7.24, fat:0.28, unit:'g', calcMode:'per100', taco:true, fiber:1.72, sodium:0.57, calcium:4.83, iron:0.6, potassium:57.28},
  {name:'Aveia flocos crua', cal:393.82, carb:66.64, prot:13.92, fat:8.5, unit:'g', calcMode:'per100', taco:true, fiber:9.13, sodium:4.63, calcium:47.89, iron:4.45, potassium:336.33},
  {name:'Biscoito doce maisena', cal:442.82, carb:75.23, prot:8.07, fat:11.97, unit:'g', calcMode:'per100', taco:true, fiber:2.1, sodium:352.03, calcium:54.45, iron:1.76, potassium:141.64},
  {name:'Biscoito doce recheado com chocolate', cal:471.82, carb:70.55, prot:6.4, fat:19.58, unit:'g', calcMode:'per100', taco:true, fiber:2.96, sodium:239.2, calcium:27.23, iron:2.27, potassium:232.4},
  {name:'Biscoito doce recheado com morango', cal:471.17, carb:71.01, prot:5.72, fat:19.57, unit:'g', calcMode:'per100', taco:true, fiber:1.53, sodium:229.82, calcium:35.78, iron:1.48, potassium:113.01},
  {name:'Biscoito doce wafer recheado de chocolate', cal:502.46, carb:67.54, prot:5.56, fat:24.67, unit:'g', calcMode:'per100', taco:true, fiber:1.8, sodium:137.24, calcium:23.34, iron:2.44, potassium:240.45},
  {name:'Biscoito doce wafer recheado de morango', cal:513.45, carb:67.35, prot:4.52, fat:26.4, unit:'g', calcMode:'per100', taco:true, fiber:0.82, sodium:119.9, calcium:13.71, iron:1.09, potassium:74.84},
  {name:'Biscoito salgado cream cracker', cal:431.73, carb:68.73, prot:10.06, fat:14.44, unit:'g', calcMode:'per100', taco:true, fiber:2.51, sodium:854.36, calcium:20, iron:2.2, potassium:180.61},
  {name:'Bolo mistura para', cal:418.63, carb:84.71, prot:6.16, fat:6.13, unit:'g', calcMode:'per100', taco:true, fiber:1.7, sodium:462.88, calcium:58.88, iron:1.21, potassium:75.36},
  {name:'Bolo pronto aipim', cal:323.85, carb:47.86, prot:4.42, fat:12.75, unit:'g', calcMode:'per100', taco:true, fiber:0.69, sodium:111.01, calcium:85.02, iron:0.49, potassium:134.82},
  {name:'Bolo pronto chocolate', cal:410.01, carb:54.72, prot:6.22, fat:18.47, unit:'g', calcMode:'per100', taco:true, fiber:1.43, sodium:283.3, calcium:74.58, iron:2.13, potassium:211.76},
  {name:'Bolo pronto coco', cal:333.44, carb:52.28, prot:5.67, fat:11.3, unit:'g', calcMode:'per100', taco:true, fiber:1.06, sodium:190.34, calcium:57.11, iron:0.85, potassium:143.29},
  {name:'Bolo pronto milho', cal:311.39, carb:45.11, prot:4.8, fat:12.42, unit:'g', calcMode:'per100', taco:true, fiber:0.71, sodium:133.81, calcium:82.58, iron:0.65, potassium:118.43},
  {name:'Canjica branca crua', cal:357.6, carb:78.06, prot:7.2, fat:0.97, unit:'g', calcMode:'per100', taco:true, fiber:5.5, sodium:0.79, calcium:1.96, iron:0.32, potassium:92.95},
  {name:'Canjica com leite integral', cal:112.46, carb:23.63, prot:2.36, fat:1.24, unit:'g', calcMode:'per100', taco:true, fiber:1.22, sodium:27.59, calcium:42.56, iron:0.06, potassium:69.81},
  {name:'Cereais milho flocos com sal', cal:369.6, carb:80.83, prot:7.29, fat:1.6, unit:'g', calcMode:'per100', taco:true, fiber:5.29, sodium:271.74, calcium:1.81, iron:0.52, potassium:68.66},
  {name:'Cereais milho flocos sem sal', cal:363.34, carb:80.45, prot:6.88, fat:1.18, unit:'g', calcMode:'per100', taco:true, fiber:1.84, sodium:30.97, calcium:1.97, iron:1.69, potassium:28.7},
  {name:'Cereais mingau milho infantil', cal:394.43, carb:87.27, prot:6.43, fat:1.09, unit:'g', calcMode:'per100', taco:true, fiber:3.21, sodium:399.4, calcium:218.81, iron:3.03, potassium:82.02},
  {name:'Cereais mistura para vitamina trigo cevada e aveia', cal:381.13, carb:81.62, prot:8.9, fat:2.12, unit:'g', calcMode:'per100', taco:true, fiber:4.98, sodium:1163.26, calcium:584.25, iron:12.64, potassium:244.36},
  {name:'Cereal matinal milho', cal:365.35, carb:83.82, prot:7.16, fat:0.96, unit:'g', calcMode:'per100', taco:true, fiber:4.12, sodium:654.54, calcium:142.92, iron:3.05, potassium:83.09},
  {name:'Cereal matinal milho açúcar', cal:376.56, carb:88.84, prot:4.74, fat:0.67, unit:'g', calcMode:'per100', taco:true, fiber:2.11, sodium:405.31, calcium:56.42, iron:3.9, potassium:51.6},
  {name:'Creme de arroz pó', cal:386, carb:83.87, prot:7.03, fat:1.23, unit:'g', calcMode:'per100', taco:true, fiber:1.07, sodium:1.03, calcium:7.09, iron:0.63, potassium:114.68},
  {name:'Creme de milho pó', cal:333.03, carb:86.15, prot:4.82, fat:1.64, unit:'g', calcMode:'per100', taco:true, fiber:3.72, sodium:593.79, calcium:323.16, iron:4.26, potassium:165.72},
  {name:'Curau milho verde', cal:78.43, carb:13.94, prot:2.36, fat:1.64, unit:'g', calcMode:'per100', taco:true, fiber:0.46, sodium:20.51, calcium:52.6, iron:0.45, potassium:161.84},
  {name:'Curau milho verde mistura para', cal:402.29, carb:79.82, prot:2.22, fat:13.37, unit:'g', calcMode:'per100', taco:true, fiber:2.52, sodium:222.93, calcium:30.88, iron:0.86, potassium:55.34},
  {name:'Farinha de arroz enriquecida', cal:363.06, carb:85.5, prot:1.27, fat:0.3, unit:'g', calcMode:'per100', taco:true, fiber:0.58, sodium:17.1, calcium:1.12, iron:31.38, potassium:12.54},
  {name:'Farinha de centeio integral', cal:335.78, carb:73.3, prot:12.52, fat:1.75, unit:'g', calcMode:'per100', taco:true, fiber:15.48, sodium:41.38, calcium:33.92, iron:4.73, potassium:333.62},
  {name:'Farinha de milho amarela', cal:350.59, carb:79.08, prot:7.19, fat:1.47, unit:'g', calcMode:'per100', taco:true, fiber:5.49, sodium:44.93, calcium:1.28, iron:2.25, potassium:57.85},
  {name:'Farinha de rosca', cal:370.58, carb:75.79, prot:11.38, fat:1.46, unit:'g', calcMode:'per100', taco:true, fiber:4.82, sodium:332.5, calcium:35.3, iron:6.73, potassium:212.14},
  {name:'Farinha de trigo', cal:360.47, carb:75.09, prot:9.79, fat:1.37, unit:'g', calcMode:'per100', taco:true, fiber:2.35, sodium:0.74, calcium:17.86, iron:0.95, potassium:151.37},
  {name:'Farinha láctea de cereais', cal:414.85, carb:77.77, prot:11.88, fat:5.79, unit:'g', calcMode:'per100', taco:true, fiber:1.94, sodium:125.07, calcium:196.06, iron:8.72, potassium:365.6},
  {name:'Lasanha massa fresca cozida', cal:163.76, carb:32.52, prot:5.81, fat:1.16, unit:'g', calcMode:'per100', taco:true, fiber:1.64, sodium:206.77, calcium:9.97, iron:1.19, potassium:53.91},
  {name:'Lasanha massa fresca crua', cal:220.31, carb:45.06, prot:7.01, fat:1.34, unit:'g', calcMode:'per100', taco:true, fiber:1.61, sodium:666.71, calcium:16.55, iron:1.87, potassium:136.61},
  {name:'Macarrão instantâneo', cal:435.86, carb:62.43, prot:8.79, fat:17.24, unit:'g', calcMode:'per100', taco:true, fiber:5.61, sodium:1515.53, calcium:17.63, iron:0.8, potassium:147.92},
  {name:'Macarrão trigo cru', cal:371.12, carb:77.94, prot:10, fat:1.3, unit:'g', calcMode:'per100', taco:true, fiber:2.93, sodium:7.17, calcium:17.3, iron:0.88, potassium:147.06},
  {name:'Macarrão trigo cru com ovos', cal:370.57, carb:76.62, prot:10.32, fat:1.97, unit:'g', calcMode:'per100', taco:true, fiber:2.3, sodium:14.74, calcium:19.45, iron:0.92, potassium:134.1},
  {name:'Milho amido cru', cal:361.37, carb:87.15, prot:0.6, fat:0, unit:'g', calcMode:'per100', taco:true, fiber:0.74, sodium:8.08, calcium:1.06, iron:0.13, potassium:8.54},
  {name:'Milho fubá cru', cal:353.48, carb:78.87, prot:7.21, fat:1.9, unit:'g', calcMode:'per100', taco:true, fiber:4.71, sodium:0, calcium:2.67, iron:0.85, potassium:168.33},
  {name:'Milho verde cru', cal:138.17, carb:28.56, prot:6.59, fat:0.61, unit:'g', calcMode:'per100', taco:true, fiber:3.92, sodium:1.12, calcium:1.61, iron:0.41, potassium:184.82},
  {name:'Milho verde enlatado drenado', cal:97.56, carb:17.14, prot:3.23, fat:2.35, unit:'g', calcMode:'per100', taco:true, fiber:4.64, sodium:260.35, calcium:2.17, iron:0.59, potassium:162.02},
  {name:'Mingau tradicional pó', cal:373.42, carb:89.34, prot:0.58, fat:0.37, unit:'g', calcMode:'per100', taco:true, fiber:0.88, sodium:14.86, calcium:522.05, iron:41.99, potassium:0},
  {name:'Pamonha barra para cozimento pré-cozida', cal:171.22, carb:30.68, prot:2.55, fat:4.85, unit:'g', calcMode:'per100', taco:true, fiber:2.37, sodium:131.99, calcium:4.16, iron:0.36, potassium:125.35},
  {name:'Pão aveia forma', cal:343.09, carb:59.57, prot:12.35, fat:5.69, unit:'g', calcMode:'per100', taco:true, fiber:5.98, sodium:605.76, calcium:108.69, iron:4.73, potassium:210.08},
  {name:'Pão de soja', cal:308.73, carb:56.51, prot:11.34, fat:3.58, unit:'g', calcMode:'per100', taco:true, fiber:5.71, sodium:662.54, calcium:90.24, iron:3.33, potassium:296.35},
  {name:'Pão glúten forma', cal:252.99, carb:44.12, prot:11.95, fat:2.73, unit:'g', calcMode:'per100', taco:true, fiber:2.48, sodium:22.05, calcium:155.72, iron:5.71, potassium:64.73},
  {name:'Pão milho forma', cal:292.01, carb:56.4, prot:8.3, fat:3.11, unit:'g', calcMode:'per100', taco:true, fiber:4.3, sodium:506.64, calcium:77.85, iron:3.04, potassium:89.02},
  {name:'Pão trigo forma integral', cal:253.19, carb:49.94, prot:9.43, fat:3.65, unit:'g', calcMode:'per100', taco:true, fiber:6.88, sodium:506.1, calcium:131.76, iron:2.99, potassium:162.87},
  {name:'Pão trigo francês', cal:299.81, carb:58.65, prot:7.95, fat:3.1, unit:'g', calcMode:'per100', taco:true, fiber:2.31, sodium:647.67, calcium:15.75, iron:1, potassium:142.2},
  {name:'Pão trigo sovado', cal:310.96, carb:61.45, prot:8.4, fat:2.84, unit:'g', calcMode:'per100', taco:true, fiber:2.43, sodium:430.79, calcium:51.62, iron:2.27, potassium:91.17},
  {name:'Pastel de carne cru', cal:288.7, carb:42.02, prot:10.74, fat:8.79, unit:'g', calcMode:'per100', taco:true, fiber:1.04, sodium:1309.27, calcium:16.69, iron:1.99, potassium:165.61},
  {name:'Pastel de carne frito', cal:388.37, carb:43.77, prot:10.1, fat:20.14, unit:'g', calcMode:'per100', taco:true, fiber:0.99, sodium:1039.89, calcium:12.55, iron:2.51, potassium:155.64},
  {name:'Pastel de queijo cru', cal:308.47, carb:45.95, prot:9.85, fat:9.63, unit:'g', calcMode:'per100', taco:true, fiber:1.11, sodium:984.57, calcium:154.7, iron:0.99, potassium:102.58},
  {name:'Pastel de queijo frito', cal:422.11, carb:48.13, prot:8.71, fat:22.67, unit:'g', calcMode:'per100', taco:true, fiber:0.94, sodium:821.38, calcium:126.13, iron:1.34, potassium:123.75},
  {name:'Pastel massa crua', cal:310.2, carb:57.38, prot:6.9, fat:5.48, unit:'g', calcMode:'per100', taco:true, fiber:1.41, sodium:1344.2, calcium:12.61, iron:1.06, potassium:166.68},
  {name:'Pastel massa frita', cal:569.67, carb:49.34, prot:6.02, fat:40.86, unit:'g', calcMode:'per100', taco:true, fiber:1.31, sodium:1174.67, calcium:11.27, iron:1.45, potassium:142.55},
  {name:'Pipoca com óleo de soja sem sal', cal:448.33, carb:70.31, prot:9.93, fat:15.94, unit:'ml', calcMode:'per100', taco:true, fiber:14.34, sodium:4.32, calcium:2.83, iron:1.16, potassium:255.96},
  {name:'Polenta pré-cozida', cal:102.74, carb:23.31, prot:2.29, fat:0.3, unit:'g', calcMode:'per100', taco:true, fiber:2.4, sodium:441.89, calcium:1.09, iron:0, potassium:99.64},
  {name:'Torrada pão francês', cal:377.42, carb:74.56, prot:10.52, fat:3.3, unit:'g', calcMode:'per100', taco:true, fiber:3.4, sodium:829.49, calcium:18.74, iron:1.24, potassium:189.49},
  {name:'Abóbora cabotian cozida', cal:48.04, carb:10.76, prot:1.44, fat:0.73, unit:'g', calcMode:'per100', taco:true, fiber:2.46, sodium:1.45, calcium:7.63, iron:0.35, potassium:199.1},
  {name:'Abóbora cabotian crua', cal:38.6, carb:8.36, prot:1.75, fat:0.54, unit:'g', calcMode:'per100', taco:true, fiber:2.17, sodium:0, calcium:17.96, iron:0.37, potassium:350.56},
  {name:'Abóbora menina brasileira crua', cal:13.61, carb:3.3, prot:0.61, fat:0, unit:'g', calcMode:'per100', taco:true, fiber:1.17, sodium:0, calcium:8.74, iron:0.15, potassium:164.6},
  {name:'Abóbora moranga crua', cal:12.36, carb:2.67, prot:0.96, fat:0.06, unit:'g', calcMode:'per100', taco:true, fiber:1.7, sodium:0, calcium:3.05, iron:0, potassium:124.87},
  {name:'Abóbora moranga refogada', cal:29, carb:5.98, prot:0.39, fat:0.8, unit:'g', calcMode:'per100', taco:true, fiber:1.55, sodium:3.03, calcium:19.08, iron:0.11, potassium:183.19},
  {name:'Abóbora pescoço crua', cal:24.47, carb:6.12, prot:0.67, fat:0.12, unit:'g', calcMode:'per100', taco:true, fiber:2.3, sodium:0.74, calcium:8.81, iron:0.28, potassium:263.88},
  {name:'Abobrinha italiana cozida', cal:15.04, carb:2.98, prot:1.12, fat:0.2, unit:'g', calcMode:'per100', taco:true, fiber:1.59, sodium:0.83, calcium:16.73, iron:0.16, potassium:125.88},
  {name:'Abobrinha italiana crua', cal:19.28, carb:4.29, prot:1.14, fat:0.14, unit:'g', calcMode:'per100', taco:true, fiber:1.35, sodium:0, calcium:15.13, iron:0.24, potassium:253.38},
  {name:'Abobrinha italiana refogada', cal:24.43, carb:4.19, prot:1.07, fat:0.82, unit:'g', calcMode:'per100', taco:true, fiber:1.38, sodium:2.21, calcium:20.67, iron:0.36, potassium:193.63},
  {name:'Abobrinha paulista crua', cal:30.81, carb:7.87, prot:0.64, fat:0.14, unit:'g', calcMode:'per100', taco:true, fiber:2.6, sodium:0.5, calcium:18.67, iron:0.17, potassium:212.87},
  {name:'Acelga crua', cal:20.94, carb:4.63, prot:1.44, fat:0.11, unit:'g', calcMode:'per100', taco:true, fiber:1.12, sodium:1.18, calcium:42.98, iron:0.27, potassium:239.82},
  {name:'Agrião cru', cal:16.58, carb:2.25, prot:2.69, fat:0.24, unit:'g', calcMode:'per100', taco:true, fiber:2.14, sodium:7.46, calcium:132.53, iron:3.11, potassium:217.66},
  {name:'Aipo cru', cal:19.09, carb:4.27, prot:0.76, fat:0.07, unit:'g', calcMode:'per100', taco:true, fiber:0.96, sodium:9.52, calcium:65.22, iron:0.72, potassium:273.6},
  {name:'Alface americana crua', cal:8.79, carb:1.75, prot:0.61, fat:0.13, unit:'g', calcMode:'per100', taco:true, fiber:1.02, sodium:7.31, calcium:14.44, iron:0.27, potassium:136},
  {name:'Alface crespa crua', cal:10.68, carb:1.7, prot:1.35, fat:0.16, unit:'g', calcMode:'per100', taco:true, fiber:1.83, sodium:3.38, calcium:37.98, iron:0.4, potassium:267.13},
  {name:'Alface lisa crua', cal:13.82, carb:2.43, prot:1.69, fat:0.12, unit:'g', calcMode:'per100', taco:true, fiber:2.33, sodium:4.23, calcium:27.51, iron:0.61, potassium:348.71},
  {name:'Alface roxa crua', cal:12.72, carb:2.49, prot:0.91, fat:0.19, unit:'g', calcMode:'per100', taco:true, fiber:2.01, sodium:7.12, calcium:33.83, iron:2.48, potassium:308.44},
  {name:'Alfavaca crua', cal:29.18, carb:5.24, prot:2.66, fat:0.48, unit:'g', calcMode:'per100', taco:true, fiber:4.14, sodium:4.55, calcium:258.5, iron:1.26, potassium:260.72},
  {name:'Alho cru', cal:113.13, carb:23.91, prot:7.01, fat:0.22, unit:'g', calcMode:'per100', taco:true, fiber:4.32, sodium:5.36, calcium:13.56, iron:0.8, potassium:534.89},
  {name:'Alho-poró cru', cal:31.51, carb:6.88, prot:1.41, fat:0.14, unit:'g', calcMode:'per100', taco:true, fiber:2.51, sodium:1.76, calcium:33.62, iron:0.64, potassium:224.47},
  {name:'Almeirão cru', cal:18.03, carb:3.34, prot:1.77, fat:0.22, unit:'g', calcMode:'per100', taco:true, fiber:2.59, sodium:2.35, calcium:19.5, iron:0.74, potassium:369.12},
  {name:'Almeirão refogado', cal:65.08, carb:5.7, prot:1.7, fat:4.85, unit:'g', calcMode:'per100', taco:true, fiber:3.43, sodium:14.52, calcium:63.4, iron:1.55, potassium:315.36},
  {name:'Batata baroa cozida', cal:80.12, carb:18.95, prot:0.85, fat:0.17, unit:'g', calcMode:'per100', taco:true, fiber:1.76, sodium:2.1, calcium:11.85, iron:0.42, potassium:258.33},
  {name:'Batata baroa crua', cal:100.98, carb:23.98, prot:1.05, fat:0.17, unit:'g', calcMode:'per100', taco:true, fiber:2.06, sodium:0, calcium:17.13, iron:0.3, potassium:505.18},
  {name:'Batata doce cozida', cal:76.76, carb:18.42, prot:0.64, fat:0.09, unit:'g', calcMode:'per100', taco:true, fiber:2.21, sodium:2.7, calcium:17.15, iron:0.19, potassium:148.44},
  {name:'Batata doce crua', cal:118.24, carb:28.2, prot:1.26, fat:0.13, unit:'g', calcMode:'per100', taco:true, fiber:2.57, sodium:8.77, calcium:21.11, iron:0.39, potassium:340.2},
  {name:'Batata frita tipo chips industrializada', cal:542.73, carb:51.22, prot:5.58, fat:36.62, unit:'g', calcMode:'per100', taco:true, fiber:2.46, sodium:607.4, calcium:11.6, iron:0.7, potassium:1014.32},
  {name:'Batata inglesa cozida', cal:51.59, carb:11.94, prot:1.16, fat:0, unit:'g', calcMode:'per100', taco:true, fiber:1.34, sodium:2.29, calcium:3.52, iron:0.19, potassium:161.33},
  {name:'Batata inglesa crua', cal:64.37, carb:14.69, prot:1.77, fat:0, unit:'g', calcMode:'per100', taco:true, fiber:1.16, sodium:0, calcium:3.55, iron:0.36, potassium:302.05},
  {name:'Batata inglesa frita', cal:267.16, carb:35.64, prot:4.97, fat:13.11, unit:'g', calcMode:'per100', taco:true, fiber:8.06, sodium:1.91, calcium:6.28, iron:0.44, potassium:488.94},
  {name:'Batata inglesa sauté', cal:67.89, carb:14.09, prot:1.29, fat:0.9, unit:'g', calcMode:'per100', taco:true, fiber:1.38, sodium:8.18, calcium:4.18, iron:0.25, potassium:199.48},
  {name:'Berinjela cozida', cal:18.85, carb:4.47, prot:0.68, fat:0.15, unit:'g', calcMode:'per100', taco:true, fiber:2.52, sodium:1.32, calcium:10.77, iron:0.22, potassium:105.48},
  {name:'Berinjela crua', cal:19.63, carb:4.43, prot:1.22, fat:0.1, unit:'g', calcMode:'per100', taco:true, fiber:2.87, sodium:0, calcium:9.22, iron:0.25, potassium:204.55},
  {name:'Beterraba cozida', cal:32.15, carb:7.23, prot:1.29, fat:0.09, unit:'g', calcMode:'per100', taco:true, fiber:1.88, sodium:22.76, calcium:15.26, iron:0.24, potassium:245.48},
  {name:'Beterraba crua', cal:48.83, carb:11.11, prot:1.95, fat:0.09, unit:'g', calcMode:'per100', taco:true, fiber:3.37, sodium:9.72, calcium:18.11, iron:0.32, potassium:375.07},
  {name:'Biscoito polvilho doce', cal:437.55, carb:80.54, prot:1.29, fat:12.25, unit:'g', calcMode:'per100', taco:true, fiber:1.16, sodium:97.8, calcium:30.45, iron:1.77, potassium:53.58},
  {name:'Brócolis cozido', cal:24.64, carb:4.37, prot:2.13, fat:0.46, unit:'g', calcMode:'per100', taco:true, fiber:3.42, sodium:2.12, calcium:50.75, iron:0.54, potassium:118.54},
  {name:'Brócolis cru', cal:25.5, carb:4.03, prot:3.64, fat:0.27, unit:'g', calcMode:'per100', taco:true, fiber:2.88, sodium:3.33, calcium:85.87, iron:0.61, potassium:322.11},
  {name:'Cará cozido', cal:77.58, carb:18.85, prot:1.53, fat:0.11, unit:'g', calcMode:'per100', taco:true, fiber:2.63, sodium:1.01, calcium:5.17, iron:0.31, potassium:203.25},
  {name:'Cará cru', cal:95.63, carb:22.95, prot:2.28, fat:0.14, unit:'g', calcMode:'per100', taco:true, fiber:7.27, sodium:0, calcium:3.91, iron:0.21, potassium:211.67},
  {name:'Caruru cru', cal:34.03, carb:5.97, prot:3.2, fat:0.58, unit:'g', calcMode:'per100', taco:true, fiber:4.47, sodium:13.66, calcium:455.3, iron:4.46, potassium:278.98},
  {name:'Catalonha crua', cal:23.89, carb:4.75, prot:1.87, fat:0.28, unit:'g', calcMode:'per100', taco:true, fiber:2.05, sodium:9.39, calcium:56.8, iron:3.08, potassium:411.79},
  {name:'Catalonha refogada', cal:63.45, carb:4.81, prot:1.95, fat:4.81, unit:'g', calcMode:'per100', taco:true, fiber:3.65, sodium:24.72, calcium:63.22, iron:1.18, potassium:452.28},
  {name:'Cebola crua', cal:39.42, carb:8.85, prot:1.71, fat:0.08, unit:'g', calcMode:'per100', taco:true, fiber:2.19, sodium:0.6, calcium:14, iron:0.2, potassium:176.12},
  {name:'Cebolinha crua', cal:19.52, carb:3.37, prot:1.87, fat:0.35, unit:'g', calcMode:'per100', taco:true, fiber:3.55, sodium:1.6, calcium:79.85, iron:0.65, potassium:206.44},
  {name:'Cenoura cozida', cal:29.86, carb:6.69, prot:0.85, fat:0.22, unit:'g', calcMode:'per100', taco:true, fiber:2.63, sodium:7.88, calcium:25.62, iron:0.09, potassium:175.51},
  {name:'Cenoura crua', cal:34.14, carb:7.66, prot:1.32, fat:0.17, unit:'g', calcMode:'per100', taco:true, fiber:3.18, sodium:3.33, calcium:22.54, iron:0.18, potassium:314.81},
  {name:'Chicória crua', cal:13.84, carb:2.85, prot:1.14, fat:0.14, unit:'g', calcMode:'per100', taco:true, fiber:2.2, sodium:13.52, calcium:44.83, iron:0.45, potassium:424.9},
  {name:'Chuchu cozido', cal:18.54, carb:4.79, prot:0.41, fat:0, unit:'g', calcMode:'per100', taco:true, fiber:1.04, sodium:1.81, calcium:7.83, iron:0.06, potassium:54.35},
  {name:'Chuchu cru', cal:16.98, carb:4.14, prot:0.7, fat:0.06, unit:'g', calcMode:'per100', taco:true, fiber:1.28, sodium:0, calcium:11.51, iron:0.17, potassium:125.99},
  {name:'Coentro folhas desidratadas', cal:309.07, carb:47.96, prot:20.88, fat:10.39, unit:'g', calcMode:'per100', taco:true, fiber:37.29, sodium:18.26, calcium:783.81, iron:81.43, potassium:3222.77},
  {name:'Couve manteiga crua', cal:27.06, carb:4.33, prot:2.87, fat:0.55, unit:'g', calcMode:'per100', taco:true, fiber:3.12, sodium:6.17, calcium:130.87, iron:0.45, potassium:403.45},
  {name:'Couve manteiga refogada', cal:90.34, carb:8.71, prot:1.67, fat:6.59, unit:'g', calcMode:'per100', taco:true, fiber:5.74, sodium:11.45, calcium:177.33, iron:0.5, potassium:314.89},
  {name:'Couve-flor crua', cal:22.56, carb:4.52, prot:1.91, fat:0.21, unit:'g', calcMode:'per100', taco:true, fiber:2.35, sodium:3.44, calcium:17.82, iron:0.53, potassium:256.01},
  {name:'Couve-flor cozida', cal:19.11, carb:3.88, prot:1.24, fat:0.27, unit:'g', calcMode:'per100', taco:true, fiber:2.13, sodium:1.79, calcium:16.14, iron:0.13, potassium:80.49},
  {name:'Espinafre Nova Zelândia cru', cal:16.1, carb:2.57, prot:2, fat:0.24, unit:'g', calcMode:'per100', taco:true, fiber:2.1, sodium:17.09, calcium:97.51, iron:0.36, potassium:336.01},
  {name:'Espinafre Nova Zelândia refogado', cal:67.25, carb:4.24, prot:2.72, fat:5.43, unit:'g', calcMode:'per100', taco:true, fiber:2.52, sodium:47.02, calcium:112.38, iron:0.65, potassium:149.23},
  {name:'Farinha de mandioca crua', cal:360.87, carb:87.9, prot:1.55, fat:0.28, unit:'g', calcMode:'per100', taco:true, fiber:6.39, sodium:1.02, calcium:64.87, iron:1.09, potassium:340.13},
  {name:'Farinha de mandioca torrada', cal:365.27, carb:89.19, prot:1.23, fat:0.29, unit:'g', calcMode:'per100', taco:true, fiber:6.54, sodium:10.31, calcium:75.53, iron:1.19, potassium:327.74},
  {name:'Farinha de puba', cal:360.18, carb:87.29, prot:1.62, fat:0.47, unit:'g', calcMode:'per100', taco:true, fiber:4.24, sodium:3.61, calcium:41.4, iron:1.43, potassium:337.76},
  {name:'Fécula de mandioca', cal:330.85, carb:81.15, prot:0.52, fat:0.28, unit:'g', calcMode:'per100', taco:true, fiber:0.65, sodium:2.45, calcium:11.89, iron:0.11, potassium:48.13},
  {name:'Feijão broto cru', cal:38.72, carb:7.76, prot:4.17, fat:0.1, unit:'g', calcMode:'per100', taco:true, fiber:1.97, sodium:1.79, calcium:14.48, iron:0.82, potassium:189.22},
  {name:'Inhame cru', cal:96.7, carb:23.23, prot:2.05, fat:0.21, unit:'g', calcMode:'per100', taco:true, fiber:1.65, sodium:0, calcium:11.8, iron:0.36, potassium:567.74},
  {name:'Jiló cru', cal:27.37, carb:6.19, prot:1.4, fat:0.22, unit:'g', calcMode:'per100', taco:true, fiber:4.83, sodium:0, calcium:19.97, iron:0.34, potassium:212.95},
  {name:'Jurubeba crua', cal:125.81, carb:23.06, prot:4.41, fat:3.91, unit:'g', calcMode:'per100', taco:true, fiber:23.92, sodium:0.77, calcium:151.02, iron:0.95, potassium:619.4},
  {name:'Mandioca cozida', cal:125.36, carb:30.09, prot:0.57, fat:0.3, unit:'g', calcMode:'per100', taco:true, fiber:1.56, sodium:0.91, calcium:18.63, iron:0.07, potassium:100.36},
  {name:'Mandioca crua', cal:151.42, carb:36.17, prot:1.13, fat:0.3, unit:'g', calcMode:'per100', taco:true, fiber:1.88, sodium:2.15, calcium:15.19, iron:0.27, potassium:208.06},
  {name:'Mandioca farofa temperada', cal:405.69, carb:80.3, prot:2.06, fat:9.12, unit:'g', calcMode:'per100', taco:true, fiber:7.82, sodium:574.51, calcium:65.69, iron:1.36, potassium:201.38},
  {name:'Mandioca frita', cal:300.06, carb:50.25, prot:1.38, fat:11.2, unit:'g', calcMode:'per100', taco:true, fiber:1.87, sodium:8.94, calcium:23.05, iron:0.32, potassium:176.06},
  {name:'Manjericão cru', cal:21.15, carb:3.64, prot:1.99, fat:0.39, unit:'g', calcMode:'per100', taco:true, fiber:3.31, sodium:3.89, calcium:210.92, iron:0.97, potassium:251.55},
  {name:'Maxixe cru', cal:13.75, carb:2.73, prot:1.39, fat:0.07, unit:'g', calcMode:'per100', taco:true, fiber:2.19, sodium:10.99, calcium:20.87, iron:0.35, potassium:327.7},
  {name:'Mostarda folha crua', cal:18.11, carb:3.24, prot:2.11, fat:0.17, unit:'g', calcMode:'per100', taco:true, fiber:1.89, sodium:2.88, calcium:68.18, iron:1.1, potassium:363.57},
  {name:'Nhoque batata cozido', cal:180.78, carb:36.78, prot:5.86, fat:1.94, unit:'g', calcMode:'per100', taco:true, fiber:1.78, sodium:7.07, calcium:11.42, iron:1.65, potassium:163.7},
  {name:'Nabo cru', cal:18.19, carb:4.15, prot:1.2, fat:0.05, unit:'g', calcMode:'per100', taco:true, fiber:2.64, sodium:2.46, calcium:42.39, iron:0.22, potassium:279.65},
  {name:'Palmito Juçara em conserva', cal:23.2, carb:4.33, prot:1.79, fat:0.4, unit:'g', calcMode:'per100', taco:true, fiber:3.15, sodium:513.82, calcium:58.29, iron:0.3, potassium:243.97},
  {name:'Palmito pupunha em conserva', cal:29.43, carb:5.51, prot:2.46, fat:0.45, unit:'g', calcMode:'per100', taco:true, fiber:2.55, sodium:562.69, calcium:32.44, iron:0.18, potassium:206.42},
  {name:'Pão de queijo assado', cal:363.08, carb:34.24, prot:5.12, fat:24.57, unit:'g', calcMode:'per100', taco:true, fiber:0.56, sodium:773.49, calcium:102.49, iron:0.28, potassium:93.09},
  {name:'Pão de queijo cru', cal:294.54, carb:38.51, prot:3.65, fat:13.99, unit:'g', calcMode:'per100', taco:true, fiber:0.98, sodium:404.99, calcium:87.56, iron:0.29, potassium:58.08},
  {name:'Pepino cru', cal:9.53, carb:2.04, prot:0.87, fat:0, unit:'g', calcMode:'per100', taco:true, fiber:1.12, sodium:0, calcium:9.62, iron:0.15, potassium:153.69},
  {name:'Pimentão amarelo cru', cal:27.93, carb:5.96, prot:1.22, fat:0.44, unit:'g', calcMode:'per100', taco:true, fiber:1.92, sodium:0, calcium:9.61, iron:0.41, potassium:221.33},
  {name:'Pimentão verde cru', cal:21.29, carb:4.89, prot:1.05, fat:0.15, unit:'g', calcMode:'per100', taco:true, fiber:2.56, sodium:0, calcium:8.76, iron:0.41, potassium:174.33},
  {name:'Pimentão vermelho cru', cal:23.28, carb:5.47, prot:1.04, fat:0.15, unit:'g', calcMode:'per100', taco:true, fiber:1.59, sodium:0, calcium:6.37, iron:0.33, potassium:210.92},
  {name:'Polvilho doce', cal:351.23, carb:86.77, prot:0.43, fat:0, unit:'g', calcMode:'per100', taco:true, fiber:0.24, sodium:1.58, calcium:27.41, iron:0.51, potassium:37.63},
  {name:'Quiabo cru', cal:29.94, carb:6.37, prot:1.92, fat:0.3, unit:'g', calcMode:'per100', taco:true, fiber:4.55, sodium:0.89, calcium:112.16, iron:0.37, potassium:248.8},
  {name:'Rabanete cru', cal:13.74, carb:2.73, prot:1.39, fat:0.07, unit:'g', calcMode:'per100', taco:true, fiber:2.19, sodium:10.99, calcium:20.87, iron:0.35, potassium:327.7},
  {name:'Repolho branco cru', cal:17.12, carb:3.86, prot:0.88, fat:0.14, unit:'g', calcMode:'per100', taco:true, fiber:1.89, sodium:3.64, calcium:34.55, iron:0.15, potassium:150.09},
  {name:'Repolho roxo cru', cal:30.91, carb:7.2, prot:1.91, fat:0.06, unit:'g', calcMode:'per100', taco:true, fiber:1.97, sodium:2.34, calcium:43.67, iron:0.52, potassium:328.07},
  {name:'Repolho roxo refogado', cal:41.77, carb:7.56, prot:1.8, fat:1.24, unit:'g', calcMode:'per100', taco:true, fiber:1.75, sodium:3.42, calcium:42.59, iron:0.47, potassium:321.45},
  {name:'Rúcula crua', cal:13.13, carb:2.22, prot:1.77, fat:0.11, unit:'g', calcMode:'per100', taco:true, fiber:1.74, sodium:9.42, calcium:116.56, iron:0.94, potassium:233.4},
  {name:'Salsa crua', cal:33.42, carb:5.71, prot:3.26, fat:0.61, unit:'g', calcMode:'per100', taco:true, fiber:1.85, sodium:2.3, calcium:179.41, iron:3.18, potassium:711.3},
  {name:'Seleta de legumes enlatada', cal:56.53, carb:12.67, prot:3.42, fat:0.35, unit:'g', calcMode:'per100', taco:true, fiber:3.09, sodium:398.14, calcium:16.16, iron:1.06, potassium:122.21},
  {name:'Serralha crua', cal:30.4, carb:4.95, prot:2.67, fat:0.74, unit:'g', calcMode:'per100', taco:true, fiber:3.52, sodium:19.35, calcium:126.02, iron:1.27, potassium:265.27},
  {name:'Taioba crua', cal:34.21, carb:5.43, prot:2.9, fat:0.93, unit:'g', calcMode:'per100', taco:true, fiber:4.45, sodium:1.16, calcium:141.09, iron:1.91, potassium:290.32},
  {name:'Tomate com semente cru', cal:15.34, carb:3.14, prot:1.1, fat:0.17, unit:'g', calcMode:'per100', taco:true, fiber:1.17, sodium:1.02, calcium:6.94, iron:0.24, potassium:222.39},
  {name:'Tomate extrato', cal:60.93, carb:14.96, prot:2.43, fat:0.19, unit:'g', calcMode:'per100', taco:true, fiber:2.8, sodium:497.93, calcium:29.08, iron:2.09, potassium:679.91},
  {name:'Tomate molho industrializado', cal:38.45, carb:7.71, prot:1.38, fat:0.9, unit:'g', calcMode:'per100', taco:true, fiber:3.12, sodium:418.28, calcium:11.73, iron:1.58, potassium:388.2},
  {name:'Tomate purê', cal:27.94, carb:6.89, prot:1.36, fat:0, unit:'g', calcMode:'per100', taco:true, fiber:1.03, sodium:103.93, calcium:13.24, iron:1.25, potassium:308.24},
  {name:'Tomate salada', cal:20.55, carb:5.12, prot:0.81, fat:0, unit:'g', calcMode:'per100', taco:true, fiber:2.27, sodium:5.24, calcium:6.95, iron:0.29, potassium:161.16},
  {name:'Vagem crua', cal:24.9, carb:5.35, prot:1.79, fat:0.17, unit:'g', calcMode:'per100', taco:true, fiber:2.38, sodium:0, calcium:41.1, iron:0.43, potassium:208.2},
  {name:'Abacate cru', cal:96.15, carb:6.03, prot:1.24, fat:8.4, unit:'g', calcMode:'per100', taco:true, fiber:6.31, sodium:0, calcium:7.92, iron:0.21, potassium:206.26},
  {name:'Abacaxi cru', cal:48.32, carb:12.33, prot:0.86, fat:0.12, unit:'g', calcMode:'per100', taco:true, fiber:0.99, sodium:0, calcium:22.43, iron:0.26, potassium:131.34},
  {name:'Abacaxi polpa congelada', cal:30.59, carb:7.8, prot:0.47, fat:0.11, unit:'g', calcMode:'per100', taco:true, fiber:0.33, sodium:1.24, calcium:13.54, iron:0.36, potassium:106.68},
  {name:'Abiu cru', cal:62.42, carb:14.93, prot:0.83, fat:0.7, unit:'g', calcMode:'per100', taco:true, fiber:1.7, sodium:0, calcium:5.78, iron:0.16, potassium:128.34},
  {name:'Açaí polpa com xarope de guaraná e glucose', cal:110.3, carb:21.46, prot:0.72, fat:3.66, unit:'g', calcMode:'per100', taco:true, fiber:1.72, sodium:15.1, calcium:22.16, iron:0.27, potassium:75.49},
  {name:'Açaí polpa congelada', cal:58.05, carb:6.21, prot:0.8, fat:3.94, unit:'g', calcMode:'per100', taco:true, fiber:2.55, sodium:5.18, calcium:35.18, iron:0.43, potassium:123.62},
  {name:'Acerola crua', cal:33.46, carb:7.97, prot:0.91, fat:0.21, unit:'g', calcMode:'per100', taco:true, fiber:1.51, sodium:0, calcium:12.55, iron:0.22, potassium:164.99},
  {name:'Acerola polpa congelada', cal:21.94, carb:5.54, prot:0.59, fat:0, unit:'g', calcMode:'per100', taco:true, fiber:0.7, sodium:1.28, calcium:7.59, iron:0.17, potassium:111.99},
  {name:'Ameixa calda enlatada', cal:182.85, carb:46.89, prot:0.41, fat:0, unit:'g', calcMode:'per100', taco:true, fiber:0.52, sodium:2.7, calcium:13.15, iron:2.15, potassium:221.19},
  {name:'Ameixa crua', cal:52.54, carb:13.85, prot:0.77, fat:0, unit:'g', calcMode:'per100', taco:true, fiber:2.43, sodium:0, calcium:5.72, iron:0.1, potassium:134.05},
  {name:'Ameixa em calda enlatada drenada', cal:177.36, carb:47.66, prot:1.02, fat:0.28, unit:'g', calcMode:'per100', taco:true, fiber:4.55, sodium:2.79, calcium:39.24, iron:2.7, potassium:263.26},
  {name:'Atemóia crua', cal:96.97, carb:25.33, prot:0.97, fat:0.3, unit:'g', calcMode:'per100', taco:true, fiber:2.14, sodium:0.78, calcium:22.77, iron:0.16, potassium:300.01},
  {name:'Banana da terra crua', cal:128.02, carb:33.67, prot:1.43, fat:0.24, unit:'g', calcMode:'per100', taco:true, fiber:1.53, sodium:0, calcium:4.15, iron:0.29, potassium:328.03},
  {name:'Banana doce em barra', cal:280.11, carb:75.67, prot:2.17, fat:0.05, unit:'g', calcMode:'per100', taco:true, fiber:3.83, sodium:9.88, calcium:11.95, iron:0.61, potassium:518.25},
  {name:'Banana figo crua', cal:105.08, carb:27.8, prot:1.13, fat:0.14, unit:'g', calcMode:'per100', taco:true, fiber:2.8, sodium:0, calcium:6.36, iron:0.2, potassium:386.59},
  {name:'Banana maçã crua', cal:86.81, carb:22.34, prot:1.75, fat:0.06, unit:'g', calcMode:'per100', taco:true, fiber:2.59, sodium:0, calcium:3.22, iron:0.2, potassium:264.39},
  {name:'Banana nanica crua', cal:91.53, carb:23.85, prot:1.4, fat:0.12, unit:'g', calcMode:'per100', taco:true, fiber:1.95, sodium:0, calcium:3.42, iron:0.35, potassium:376.47},
  {name:'Banana ouro crua', cal:112.37, carb:29.34, prot:1.48, fat:0.21, unit:'g', calcMode:'per100', taco:true, fiber:1.95, sodium:0, calcium:3.19, iron:0.34, potassium:354.81},
  {name:'Banana pacova crua', cal:77.91, carb:20.31, prot:1.23, fat:0.08, unit:'g', calcMode:'per100', taco:true, fiber:2.03, sodium:0.94, calcium:5.49, iron:0.37, potassium:267.35},
  {name:'Banana prata crua', cal:98.25, carb:25.96, prot:1.27, fat:0.06, unit:'g', calcMode:'per100', taco:true, fiber:2.04, sodium:0, calcium:7.56, iron:0.38, potassium:357.68},
  {name:'Cacau cru', cal:74.29, carb:19.41, prot:0.95, fat:0.14, unit:'g', calcMode:'per100', taco:true, fiber:2.19, sodium:0.7, calcium:12.1, iron:0.26, potassium:71.64},
  {name:'Cajá-Manga cru', cal:45.58, carb:11.43, prot:1.28, fat:0, unit:'g', calcMode:'per100', taco:true, fiber:2.58, sodium:1.44, calcium:12.74, iron:0.15, potassium:119.4},
  {name:'Cajá polpa congelada', cal:26.33, carb:6.37, prot:0.59, fat:0.17, unit:'g', calcMode:'per100', taco:true, fiber:1.36, sodium:6.94, calcium:9.16, iron:0.32, potassium:148.07},
  {name:'Caju cru', cal:43.07, carb:10.29, prot:0.97, fat:0.33, unit:'g', calcMode:'per100', taco:true, fiber:1.68, sodium:2.97, calcium:1.42, iron:0.15, potassium:123.86},
  {name:'Caju polpa congelada', cal:36.57, carb:9.35, prot:0.48, fat:0.15, unit:'g', calcMode:'per100', taco:true, fiber:0.81, sodium:4.16, calcium:0.84, iron:0.15, potassium:87.66},
  {name:'Caju suco concentrado envasado', cal:45.11, carb:10.73, prot:0.4, fat:0.2, unit:'ml', calcMode:'per100', taco:true, fiber:0.63, sodium:45.04, calcium:0.98, iron:0.15, potassium:106.99},
  {name:'Caqui chocolate cru', cal:71.35, carb:19.33, prot:0.36, fat:0.07, unit:'g', calcMode:'per100', taco:true, fiber:6.52, sodium:2.18, calcium:17.85, iron:0.1, potassium:163.55},
  {name:'Carambola crua', cal:45.74, carb:11.48, prot:0.87, fat:0.18, unit:'g', calcMode:'per100', taco:true, fiber:2.03, sodium:4.09, calcium:4.79, iron:0.2, potassium:132.58},
  {name:'Ciriguela crua', cal:75.59, carb:18.86, prot:1.4, fat:0.36, unit:'g', calcMode:'per100', taco:true, fiber:3.9, sodium:1.68, calcium:27.41, iron:0.36, potassium:248.01},
  {name:'Cupuaçu cru', cal:49.42, carb:10.43, prot:1.16, fat:0.95, unit:'g', calcMode:'per100', taco:true, fiber:3.12, sodium:3.2, calcium:13.12, iron:0.49, potassium:331.03},
  {name:'Cupuaçu polpa congelada', cal:48.8, carb:11.39, prot:0.84, fat:0.59, unit:'g', calcMode:'per100', taco:true, fiber:1.59, sodium:0.69, calcium:5.49, iron:0.26, potassium:291.09},
  {name:'Figo cru', cal:41.45, carb:10.25, prot:0.97, fat:0.16, unit:'g', calcMode:'per100', taco:true, fiber:1.79, sodium:0, calcium:27.39, iron:0.2, potassium:174.42},
  {name:'Figo enlatado em calda', cal:184.36, carb:50.34, prot:0.56, fat:0.15, unit:'g', calcMode:'per100', taco:true, fiber:1.98, sodium:6.87, calcium:32.62, iron:0.5, potassium:39.35},
  {name:'Fruta-pão crua', cal:67.05, carb:17.17, prot:1.08, fat:0.19, unit:'g', calcMode:'per100', taco:true, fiber:5.55, sodium:0.8, calcium:33.68, iron:0.23, potassium:188.13},
  {name:'Goiaba branca com casca crua', cal:51.74, carb:12.4, prot:0.9, fat:0.49, unit:'g', calcMode:'per100', taco:true, fiber:6.33, sodium:0, calcium:5.01, iron:0.17, potassium:219.77},
  {name:'Goiaba doce em pasta', cal:268.96, carb:74.12, prot:0.58, fat:0, unit:'g', calcMode:'per100', taco:true, fiber:3.73, sodium:3.7, calcium:10.06, iron:0.4, potassium:164.81},
  {name:'Goiaba doce cascão', cal:285.59, carb:78.7, prot:0.41, fat:0.1, unit:'g', calcMode:'per100', taco:true, fiber:4.37, sodium:11.03, calcium:14.7, iron:0.4, potassium:250.72},
  {name:'Goiaba vermelha com casca crua', cal:54.17, carb:13.01, prot:1.09, fat:0.44, unit:'g', calcMode:'per100', taco:true, fiber:6.22, sodium:0, calcium:4.45, iron:0.17, potassium:197.58},
  {name:'Graviola crua', cal:61.62, carb:15.84, prot:0.85, fat:0.21, unit:'g', calcMode:'per100', taco:true, fiber:1.91, sodium:4.16, calcium:40.12, iron:0.17, potassium:249.67},
  {name:'Graviola polpa congelada', cal:38.27, carb:9.78, prot:0.57, fat:0.14, unit:'g', calcMode:'per100', taco:true, fiber:1.19, sodium:3.05, calcium:5.98, iron:0.1, potassium:169.96},
  {name:'Jabuticaba crua', cal:58.05, carb:15.26, prot:0.61, fat:0.13, unit:'g', calcMode:'per100', taco:true, fiber:2.3, sodium:0, calcium:8.35, iron:0.09, potassium:129.72},
  {name:'Jaca crua', cal:87.92, carb:22.5, prot:1.4, fat:0.26, unit:'g', calcMode:'per100', taco:true, fiber:2.39, sodium:1.8, calcium:11.24, iron:0.38, potassium:233.75},
  {name:'Jambo cru', cal:26.91, carb:6.49, prot:0.89, fat:0.07, unit:'g', calcMode:'per100', taco:true, fiber:5.07, sodium:21.66, calcium:13.8, iron:0.14, potassium:134.87},
  {name:'Jamelão cru', cal:41.01, carb:10.63, prot:0.55, fat:0.11, unit:'g', calcMode:'per100', taco:true, fiber:1.78, sodium:1.37, calcium:3.09, iron:0.05, potassium:394.34},
  {name:'Kiwi cru', cal:51.14, carb:11.5, prot:1.34, fat:0.63, unit:'g', calcMode:'per100', taco:true, fiber:2.65, sodium:0, calcium:23.91, iron:0.25, potassium:268.92},
  {name:'Laranja baía crua', cal:45.44, carb:11.47, prot:0.98, fat:0.1, unit:'g', calcMode:'per100', taco:true, fiber:1.12, sodium:0, calcium:35.41, iron:0.14, potassium:174.15},
  {name:'Laranja baía suco', cal:36.65, carb:8.7, prot:0.65, fat:0, unit:'ml', calcMode:'per100', taco:true, fiber:0, sodium:0, calcium:5.93, iron:0.06, potassium:172.56},
  {name:'Laranja da terra crua', cal:51.47, carb:12.86, prot:1.08, fat:0.19, unit:'g', calcMode:'per100', taco:true, fiber:3.98, sodium:0.83, calcium:51.08, iron:0.15, potassium:172.52},
  {name:'Laranja da terra suco', cal:40.96, carb:9.57, prot:0.67, fat:0.14, unit:'ml', calcMode:'per100', taco:true, fiber:1.03, sodium:0, calcium:13.39, iron:0.09, potassium:145.24},
  {name:'Laranja lima crua', cal:45.7, carb:11.53, prot:1.06, fat:0.08, unit:'g', calcMode:'per100', taco:true, fiber:1.78, sodium:1.11, calcium:31.47, iron:0.12, potassium:129.87},
  {name:'Laranja lima suco', cal:39.34, carb:9.17, prot:0.71, fat:0.12, unit:'ml', calcMode:'per100', taco:true, fiber:0.42, sodium:0, calcium:7.74, iron:0, potassium:128.74},
  {name:'Laranja pêra crua', cal:36.77, carb:8.95, prot:1.04, fat:0.13, unit:'g', calcMode:'per100', taco:true, fiber:0.77, sodium:0, calcium:21.89, iron:0.09, potassium:162.82},
  {name:'Laranja pêra suco', cal:32.71, carb:7.55, prot:0.74, fat:0.07, unit:'ml', calcMode:'per100', taco:true, fiber:0, sodium:0, calcium:7.37, iron:0, potassium:148.76},
  {name:'Laranja valência crua', cal:46.11, carb:11.72, prot:0.77, fat:0.16, unit:'g', calcMode:'per100', taco:true, fiber:1.73, sodium:0.63, calcium:33.74, iron:0.09, potassium:157.9},
  {name:'Laranja valência suco', cal:36.2, carb:8.55, prot:0.48, fat:0.12, unit:'ml', calcMode:'per100', taco:true, fiber:0.42, sodium:0, calcium:9.08, iron:0, potassium:143.42},
  {name:'Limão cravo suco', cal:14.1, carb:5.25, prot:0.32, fat:0, unit:'ml', calcMode:'per100', taco:true, fiber:0, sodium:0, calcium:10.18, iron:0.08, potassium:119.88},
  {name:'Limão galego suco', cal:22.23, carb:7.32, prot:0.57, fat:0.07, unit:'ml', calcMode:'per100', taco:true, fiber:0, sodium:0, calcium:5.26, iron:0.05, potassium:112.51},
  {name:'Limão tahiti cru', cal:31.82, carb:11.08, prot:0.94, fat:0.14, unit:'g', calcMode:'per100', taco:true, fiber:1.18, sodium:1.25, calcium:50.98, iron:0.18, potassium:128.29},
  {name:'Maçã Argentina com casca crua', cal:62.53, carb:16.59, prot:0.22, fat:0.25, unit:'g', calcMode:'per100', taco:true, fiber:2.03, sodium:1.32, calcium:3.39, iron:0.05, potassium:117.48},
  {name:'Maçã Fuji com casca crua', cal:55.52, carb:15.15, prot:0.29, fat:0, unit:'g', calcMode:'per100', taco:true, fiber:1.35, sodium:0, calcium:1.92, iron:0.09, potassium:74.71},
  {name:'Macaúba crua', cal:404.28, carb:13.95, prot:2.08, fat:40.66, unit:'g', calcMode:'per100', taco:true, fiber:13.44, sodium:0.65, calcium:66.53, iron:0.81, potassium:305.81},
  {name:'Mamão doce em calda drenado', cal:195.63, carb:54, prot:0.19, fat:0.07, unit:'g', calcMode:'per100', taco:true, fiber:1.31, sodium:2.91, calcium:20.01, iron:0.11, potassium:68.24},
  {name:'Mamão Formosa cru', cal:45.34, carb:11.55, prot:0.82, fat:0.12, unit:'g', calcMode:'per100', taco:true, fiber:1.81, sodium:3.26, calcium:24.87, iron:0.23, potassium:221.8},
  {name:'Mamão Papaia cru', cal:40.16, carb:10.44, prot:0.46, fat:0.12, unit:'g', calcMode:'per100', taco:true, fiber:1.04, sodium:1.63, calcium:22.42, iron:0.19, potassium:126.15},
  {name:'Mamão verde doce em calda drenado', cal:209.38, carb:57.64, prot:0.32, fat:0.1, unit:'g', calcMode:'per100', taco:true, fiber:1.23, sodium:4.74, calcium:12.44, iron:0.15, potassium:8.67},
  {name:'Manga Haden crua', cal:63.5, carb:16.66, prot:0.41, fat:0.26, unit:'g', calcMode:'per100', taco:true, fiber:1.58, sodium:0.55, calcium:11.66, iron:0.1, potassium:147.88},
  {name:'Manga Palmer crua', cal:72.49, carb:19.35, prot:0.41, fat:0.17, unit:'g', calcMode:'per100', taco:true, fiber:1.63, sodium:1.86, calcium:11.64, iron:0.09, potassium:156.53},
  {name:'Manga polpa congelada', cal:48.31, carb:12.52, prot:0.38, fat:0.23, unit:'g', calcMode:'per100', taco:true, fiber:1.07, sodium:6.73, calcium:7.12, iron:0.09, potassium:131.37},
  {name:'Manga Tommy Atkins crua', cal:50.69, carb:12.77, prot:0.86, fat:0.22, unit:'g', calcMode:'per100', taco:true, fiber:2.07, sodium:0, calcium:7.64, iron:0.08, potassium:138.37},
  {name:'Maracujá cru', cal:68.44, carb:12.26, prot:1.99, fat:2.1, unit:'g', calcMode:'per100', taco:true, fiber:1.14, sodium:1.58, calcium:5.39, iron:0.56, potassium:338.42},
  {name:'Maracujá polpa congelada', cal:38.76, carb:9.6, prot:0.81, fat:0.18, unit:'g', calcMode:'per100', taco:true, fiber:0.51, sodium:8.1, calcium:4.61, iron:0.29, potassium:227.91},
  {name:'Maracujá suco concentrado envasado', cal:41.97, carb:9.64, prot:0.77, fat:0.19, unit:'ml', calcMode:'per100', taco:true, fiber:0.35, sodium:21.69, calcium:4.16, iron:0.34, potassium:200.7},
  {name:'Melancia crua', cal:32.61, carb:8.14, prot:0.88, fat:0, unit:'g', calcMode:'per100', taco:true, fiber:0.12, sodium:0, calcium:7.72, iron:0.23, potassium:104.03},
  {name:'Melão cru', cal:29.37, carb:7.53, prot:0.68, fat:0, unit:'g', calcMode:'per100', taco:true, fiber:0.25, sodium:11.17, calcium:2.86, iron:0.23, potassium:216},
  {name:'Mexerica Murcote crua', cal:57.59, carb:14.86, prot:0.88, fat:0.13, unit:'g', calcMode:'per100', taco:true, fiber:3.07, sodium:1.17, calcium:33.07, iron:0.07, potassium:158.54},
  {name:'Mexerica Rio crua', cal:36.87, carb:9.34, prot:0.65, fat:0.13, unit:'g', calcMode:'per100', taco:true, fiber:2.73, sodium:1.82, calcium:17.18, iron:0.09, potassium:124.99},
  {name:'Morango cru', cal:30.15, carb:6.82, prot:0.89, fat:0.31, unit:'g', calcMode:'per100', taco:true, fiber:1.72, sodium:0, calcium:10.9, iron:0.32, potassium:184.4},
  {name:'Nêspera crua', cal:42.54, carb:11.53, prot:0.31, fat:0, unit:'g', calcMode:'per100', taco:true, fiber:2.96, sodium:0, calcium:19.69, iron:0.15, potassium:112.85},
  {name:'Pequi cru', cal:204.97, carb:12.97, prot:2.34, fat:17.97, unit:'g', calcMode:'per100', taco:true, fiber:19.04, sodium:0, calcium:32.44, iron:0.27, potassium:297.79},
  {name:'Pêra Park crua', cal:60.59, carb:16.07, prot:0.24, fat:0.23, unit:'g', calcMode:'per100', taco:true, fiber:2.98, sodium:0.98, calcium:8.71, iron:0.32, potassium:102.22},
  {name:'Pêra Williams crua', cal:53.31, carb:14.02, prot:0.57, fat:0.11, unit:'g', calcMode:'per100', taco:true, fiber:3.01, sodium:0, calcium:8.28, iron:0.09, potassium:115.87},
  {name:'Pêssego Aurora cru', cal:36.33, carb:9.32, prot:0.82, fat:0, unit:'g', calcMode:'per100', taco:true, fiber:1.42, sodium:0, calcium:3.23, iron:0.22, potassium:123.79},
  {name:'Pêssego enlatado em calda', cal:63.14, carb:16.88, prot:0.71, fat:0, unit:'g', calcMode:'per100', taco:true, fiber:1.02, sodium:3.2, calcium:4.1, iron:0.6, potassium:94.72},
  {name:'Pinha crua', cal:88.47, carb:22.45, prot:1.49, fat:0.32, unit:'g', calcMode:'per100', taco:true, fiber:3.36, sodium:1.34, calcium:20.88, iron:0.21, potassium:283.05},
  {name:'Pitanga crua', cal:41.42, carb:10.24, prot:0.93, fat:0.17, unit:'g', calcMode:'per100', taco:true, fiber:3.24, sodium:1.7, calcium:17.88, iron:0.4, potassium:113.44},
  {name:'Pitanga polpa congelada', cal:19.11, carb:4.76, prot:0.29, fat:0.12, unit:'g', calcMode:'per100', taco:true, fiber:0.74, sodium:5.03, calcium:7.8, iron:0.37, potassium:87.31},
  {name:'Romã crua', cal:55.74, carb:15.11, prot:0.4, fat:0, unit:'g', calcMode:'per100', taco:true, fiber:0.44, sodium:0.59, calcium:4.75, iron:0.26, potassium:484.57},
  {name:'Tamarindo cru', cal:275.7, carb:72.53, prot:3.21, fat:0.46, unit:'g', calcMode:'per100', taco:true, fiber:6.45, sodium:0.36, calcium:37.1, iron:0.55, potassium:722.99},
  {name:'Tangerina Poncã crua', cal:37.83, carb:9.61, prot:0.85, fat:0.07, unit:'g', calcMode:'per100', taco:true, fiber:0.94, sodium:0, calcium:12.89, iron:0.11, potassium:131.44},
  {name:'Tangerina Poncã suco', cal:36.11, carb:8.8, prot:0.52, fat:0, unit:'ml', calcMode:'per100', taco:true, fiber:0, sodium:0, calcium:4.28, iron:0, potassium:119},
  {name:'Tucumã cru', cal:262.02, carb:26.47, prot:2.09, fat:19.08, unit:'g', calcMode:'per100', taco:true, fiber:12.65, sodium:3.89, calcium:46.34, iron:0.57, potassium:401.17},
  {name:'Umbu cru', cal:37.02, carb:9.4, prot:0.84, fat:0, unit:'g', calcMode:'per100', taco:true, fiber:1.98, sodium:0, calcium:11.56, iron:0.09, potassium:151.83},
  {name:'Umbu polpa congelada', cal:33.94, carb:8.79, prot:0.51, fat:0.07, unit:'g', calcMode:'per100', taco:true, fiber:1.34, sodium:5.77, calcium:10.71, iron:0.21, potassium:153.88},
  {name:'Uva Itália crua', cal:52.87, carb:13.57, prot:0.75, fat:0.2, unit:'g', calcMode:'per100', taco:true, fiber:0.92, sodium:0, calcium:6.66, iron:0.14, potassium:161.94},
  {name:'Uva Rubi crua', cal:49.06, carb:12.7, prot:0.61, fat:0.16, unit:'g', calcMode:'per100', taco:true, fiber:0.93, sodium:7.92, calcium:7.62, iron:0.17, potassium:158.89},
  {name:'Uva suco concentrado envasado', cal:57.66, carb:14.71, prot:0, fat:0, unit:'ml', calcMode:'per100', taco:true, fiber:0.23, sodium:9.58, calcium:9.32, iron:0.12, potassium:53.73},
  {name:'Azeite de dendê', cal:884, carb:0, prot:0, fat:100, unit:'ml', calcMode:'per100', taco:true},
  {name:'Azeite de oliva extra virgem', cal:884, carb:0, prot:0, fat:100, unit:'ml', calcMode:'per100', taco:true},
  {name:'Manteiga com sal', cal:725.97, carb:0.06, prot:0.41, fat:82.36, unit:'g', calcMode:'per100', taco:true, sodium:578.69, calcium:9.42, iron:0.15, potassium:14.78},
  {name:'Manteiga sem sal', cal:757.54, carb:0, prot:0.4, fat:86.04, unit:'g', calcMode:'per100', taco:true, sodium:3.85, calcium:3.61, iron:0, potassium:5.2},
  {name:'Margarina com óleo hidrogenado com sal (65% de lipídeos)', cal:596.12, carb:0, prot:0, fat:67.43, unit:'ml', calcMode:'per100', taco:true, sodium:894.04, calcium:5.56, iron:0.09, potassium:21.42},
  {name:'Margarina com óleo hidrogenado sem sal (80% de lipídeos)', cal:722.53, carb:0, prot:0, fat:81.73, unit:'ml', calcMode:'per100', taco:true, sodium:77.89, calcium:2.6, iron:0.05, potassium:1.77},
  {name:'Margarina com óleo interesterificado com sal (65%de lipídeos)', cal:594.45, carb:0, prot:0, fat:67.25, unit:'ml', calcMode:'per100', taco:true, sodium:560.8, calcium:4.54, iron:0, potassium:14.71},
  {name:'Margarina com óleo interesterificado sem sal (65% de lipídeos)', cal:593.14, carb:0, prot:0, fat:67.1, unit:'ml', calcMode:'per100', taco:true, sodium:33.19, calcium:4.96, iron:0.08, potassium:4.73},
  {name:'Óleo de babaçu', cal:884, carb:0, prot:0, fat:100, unit:'ml', calcMode:'per100', taco:true},
  {name:'Óleo de canola', cal:884, carb:0, prot:0, fat:100, unit:'ml', calcMode:'per100', taco:true},
  {name:'Óleo de girassol', cal:884, carb:0, prot:0, fat:100, unit:'ml', calcMode:'per100', taco:true},
  {name:'Óleo de milho', cal:884, carb:0, prot:0, fat:100, unit:'ml', calcMode:'per100', taco:true},
  {name:'Óleo de pequi', cal:884, carb:0, prot:0, fat:100, unit:'ml', calcMode:'per100', taco:true},
  {name:'Óleo de soja', cal:884, carb:0, prot:0, fat:100, unit:'ml', calcMode:'per100', taco:true},
  {name:'Abadejo filé congelado assado', cal:111.62, carb:0, prot:23.52, fat:1.24, unit:'g', calcMode:'per100', taco:true, sodium:334.39, calcium:22.61, iron:0.53, potassium:155.64},
  {name:'Abadejo filé congelado cozido', cal:91.1, carb:0, prot:19.35, fat:0.94, unit:'g', calcMode:'per100', taco:true, sodium:189.34, calcium:16.73, iron:0.33, potassium:145.67},
  {name:'Abadejo filé congelado cru', cal:59.11, carb:0, prot:13.08, fat:0.36, unit:'g', calcMode:'per100', taco:true, sodium:78.52, calcium:10.17, iron:0.11, potassium:148.35},
  {name:'Abadejo filé congelado grelhado', cal:129.64, carb:0, prot:27.61, fat:1.3, unit:'g', calcMode:'per100', taco:true, sodium:305.09, calcium:20.17, iron:0.33, potassium:278.64},
  {name:'Atum conserva em óleo', cal:165.91, carb:0, prot:26.19, fat:6, unit:'ml', calcMode:'per100', taco:true, sodium:362.15, calcium:6.52, iron:1.23, potassium:279.86},
  {name:'Atum fresco cru', cal:117.5, carb:0, prot:25.68, fat:0.87, unit:'g', calcMode:'per100', taco:true, sodium:30.3, calcium:6.69, iron:1.27, potassium:307.76},
  {name:'Bacalhau salgado cru', cal:135.89, carb:0, prot:29.04, fat:1.32, unit:'g', calcMode:'per100', taco:true, sodium:13585.06, calcium:156.97, iron:0.85, potassium:433.9},
  {name:'Bacalhau salgado refogado', cal:139.66, carb:1.22, prot:23.98, fat:3.61, unit:'g', calcMode:'per100', taco:true, sodium:1256.28, calcium:59.12, iron:0.15, potassium:50.22},
  {name:'Cação posta com farinha de trigo frita', cal:208.33, carb:3.1, prot:24.95, fat:9.95, unit:'g', calcMode:'per100', taco:true, fiber:0.54, sodium:160.03, calcium:30.44, iron:1, potassium:419.89},
  {name:'Cação posta cozida', cal:116.01, carb:0, prot:25.59, fat:0.75, unit:'g', calcMode:'per100', taco:true, sodium:114.91, calcium:10.32, iron:0.32, potassium:248.64},
  {name:'Cação posta crua', cal:83.33, carb:0, prot:17.85, fat:0.79, unit:'g', calcMode:'per100', taco:true, sodium:176.02, calcium:8.7, iron:0.2, potassium:299.02},
  {name:'Camarão Rio Grande grande cozido', cal:90.01, carb:0, prot:18.97, fat:1, unit:'g', calcMode:'per100', taco:true, sodium:366.55, calcium:89.74, iron:1.28, potassium:101.74},
  {name:'Camarão Rio Grande grande cru', cal:47.18, carb:0, prot:9.99, fat:0.5, unit:'g', calcMode:'per100', taco:true, sodium:201.13, calcium:51.12, iron:0.67, potassium:72.01},
  {name:'Camarão Sete Barbas sem cabeça com casca frito', cal:231.25, carb:2.88, prot:18.39, fat:15.62, unit:'g', calcMode:'per100', taco:true, sodium:99.06, calcium:959.7, iron:2.44, potassium:106.77},
  {name:'Caranguejo cozido', cal:82.72, carb:0, prot:18.48, fat:0.42, unit:'g', calcMode:'per100', taco:true, sodium:360.11, calcium:357.15, iron:2.86, potassium:185.83},
  {name:'Corimba cru', cal:128.16, carb:-0.03, prot:17.37, fat:5.99, unit:'g', calcMode:'per100', taco:true, sodium:47.01, calcium:40.05, iron:0.5, potassium:316.74},
  {name:'Corimbatá assado', cal:261.45, carb:0, prot:19.9, fat:19.57, unit:'g', calcMode:'per100', taco:true, sodium:40.43, calcium:22.3, iron:0.97, potassium:326.5},
  {name:'Corimbatá cozido', cal:238.7, carb:0, prot:20.13, fat:16.93, unit:'g', calcMode:'per100', taco:true, sodium:37.17, calcium:64.69, iron:0.62, potassium:253.99},
  {name:'Corvina de água doce crua', cal:101.01, carb:0, prot:18.92, fat:2.24, unit:'g', calcMode:'per100', taco:true, sodium:45.09, calcium:39.43, iron:0.26, potassium:293.02},
  {name:'Corvina do mar crua', cal:94, carb:0, prot:18.57, fat:1.58, unit:'g', calcMode:'per100', taco:true, sodium:67.97, iron:0.38, potassium:338.7},
  {name:'Corvina grande assada', cal:146.53, carb:0, prot:26.77, fat:3.57, unit:'g', calcMode:'per100', taco:true, sodium:85.35, calcium:60.22, iron:0.54, potassium:291.46},
  {name:'Corvina grande cozida', cal:100.08, carb:0, prot:23.44, fat:2.56, unit:'g', calcMode:'per100', taco:true, sodium:68.39, calcium:69.37, iron:0.58, potassium:194.04},
  {name:'Dourada de água doce fresca', cal:131.21, carb:0, prot:18.81, fat:5.64, unit:'g', calcMode:'per100', taco:true, sodium:40.3, calcium:12.13, iron:0.15, potassium:392.51},
  {name:'Lambari congelado cru', cal:130.84, carb:0, prot:16.81, fat:6.55, unit:'g', calcMode:'per100', taco:true, sodium:47.92, calcium:1181.28, iron:0.91, potassium:244.4},
  {name:'Lambari congelado frito', cal:326.87, carb:0, prot:28.42, fat:22.78, unit:'g', calcMode:'per100', taco:true, sodium:64.55, calcium:1881.04, iron:0.81, potassium:331.17},
  {name:'Lambari fresco cru', cal:151.6, carb:0, prot:15.65, fat:9.4, unit:'g', calcMode:'per100', taco:true, sodium:41.11, calcium:590.27, iron:0.63, potassium:207.36},
  {name:'Manjuba com farinha de trigo frita', cal:343.55, carb:10.24, prot:23.45, fat:22.59, unit:'g', calcMode:'per100', taco:true, fiber:0.36, sodium:36.52, calcium:763.31, iron:3.04, potassium:319.26},
  {name:'Manjuba frita', cal:349.33, carb:0, prot:30.14, fat:24.46, unit:'g', calcMode:'per100', taco:true, sodium:40.61, calcium:575.03, iron:0.92, potassium:318.18},
  {name:'Merluza filé assado', cal:121.91, carb:0, prot:26.6, fat:0.92, unit:'g', calcMode:'per100', taco:true, sodium:119.95, calcium:35.91, iron:0.37, potassium:363.57},
  {name:'Merluza filé cru', cal:89.13, carb:0, prot:16.61, fat:2.02, unit:'g', calcMode:'per100', taco:true, sodium:79.5, calcium:20.4, iron:0.19, potassium:339.53},
  {name:'Merluza filé frito', cal:191.63, carb:0, prot:26.93, fat:8.5, unit:'g', calcMode:'per100', taco:true, sodium:89.96, calcium:35.63, iron:0.38, potassium:446.62},
  {name:'Pescada branca crua', cal:110.88, carb:0, prot:16.26, fat:4.59, unit:'g', calcMode:'per100', taco:true, sodium:76.17, calcium:15.74, iron:0.16, potassium:261.4},
  {name:'Pescada branca frita', cal:223.04, carb:0, prot:27.36, fat:11.78, unit:'g', calcMode:'per100', taco:true, sodium:107.23, calcium:378.27, iron:0.51, potassium:355.15},
  {name:'Pescada filé com farinha de trigo frito', cal:283.43, carb:5.03, prot:21.44, fat:19.11, unit:'g', calcMode:'per100', taco:true, fiber:0, sodium:90.51, calcium:26.43, iron:0.94, potassium:216.37},
  {name:'Pescada filé cru', cal:107.21, carb:0, prot:16.65, fat:4, unit:'g', calcMode:'per100', taco:true, sodium:77.5, calcium:13.55, iron:0.17, potassium:253.06},
  {name:'Pescada filé frito', cal:154.27, carb:0, prot:28.59, fat:3.57, unit:'g', calcMode:'per100', taco:true, sodium:114.91, calcium:10.32, iron:0.32, potassium:248.64},
  {name:'Pescada filé molho escabeche', cal:141.96, carb:5.02, prot:11.75, fat:8.02, unit:'g', calcMode:'per100', taco:true, fiber:0.78, sodium:51.29, calcium:20.12, iron:1.47, potassium:208.24},
  {name:'Pescadinha crua', cal:76.41, carb:0, prot:15.48, fat:1.14, unit:'g', calcMode:'per100', taco:true, sodium:120.34, calcium:331.6, iron:0.55, potassium:303.83},
  {name:'Pintado assado', cal:191.56, carb:0, prot:36.45, fat:3.98, unit:'g', calcMode:'per100', taco:true, sodium:80.95, calcium:113.54, iron:0.78, potassium:527.15},
  {name:'Pintado cru', cal:91.08, carb:0, prot:18.56, fat:1.31, unit:'g', calcMode:'per100', taco:true, sodium:43.34, calcium:12, iron:0.22, potassium:293.65},
  {name:'Pintado grelhado', cal:152.19, carb:0, prot:30.8, fat:2.29, unit:'g', calcMode:'per100', taco:true, sodium:53.09, calcium:68.98, iron:0.48, potassium:360.15},
  {name:'Porquinho cru', cal:93.02, carb:0, prot:20.49, fat:0.61, unit:'g', calcMode:'per100', taco:true, sodium:66.73, calcium:25.88, iron:0.39, potassium:313.42},
  {name:'Salmão filé com pele fresco grelhado', cal:228.73, carb:0, prot:23.92, fat:14.04, unit:'g', calcMode:'per100', taco:true, sodium:85.14, calcium:28.76, iron:0.54, potassium:383.94},
  {name:'Salmão sem pele fresco cru', cal:169.78, carb:0, prot:19.25, fat:9.71, unit:'g', calcMode:'per100', taco:true, sodium:64.24, calcium:8.75, iron:0.24, potassium:376.5},
  {name:'Salmão sem pele fresco grelhado', cal:242.71, carb:0, prot:26.14, fat:14.53, unit:'g', calcMode:'per100', taco:true, sodium:95.81, calcium:15.09, iron:0.37, potassium:517.9},
  {name:'Sardinha assada', cal:164.35, carb:0, prot:32.18, fat:2.99, unit:'g', calcMode:'per100', taco:true, sodium:74.47, calcium:437.73, iron:1.25, potassium:574.34},
  {name:'Sardinha conserva em óleo', cal:284.98, carb:0, prot:15.94, fat:24.05, unit:'ml', calcMode:'per100', taco:true, sodium:665.84, calcium:550.24, iron:3.54, potassium:367.13},
  {name:'Sardinha frita', cal:257.04, carb:0, prot:33.38, fat:12.69, unit:'g', calcMode:'per100', taco:true, sodium:60.1, calcium:482.07, iron:1.12, potassium:459.94},
  {name:'Sardinha inteira crua', cal:113.9, carb:0, prot:21.08, fat:2.65, unit:'g', calcMode:'per100', taco:true, sodium:60.39, calcium:167.33, iron:1.34, potassium:312.37},
  {name:'Tucunaré filé congelado cru', cal:87.69, carb:-0.05, prot:17.96, fat:1.22, unit:'g', calcMode:'per100', taco:true, sodium:56.55, calcium:19.22, iron:0.27, potassium:288.06},
  {name:'Apresuntado', cal:128.86, carb:2.86, prot:13.45, fat:6.69, unit:'g', calcMode:'per100', taco:true, sodium:942.93, calcium:22.58, iron:0.88, potassium:270.07},
  {name:'Caldo de carne tablete', cal:240.62, carb:15.05, prot:7.82, fat:16.57, unit:'ml', calcMode:'per100', taco:true, fiber:0.58, sodium:22179.67, calcium:129.03, iron:0, potassium:218.15},
  {name:'Caldo de galinha tablete', cal:251.45, carb:10.65, prot:6.28, fat:20.42, unit:'ml', calcMode:'per100', taco:true, fiber:11.81, sodium:22299.9, calcium:16.36, iron:0.69, potassium:68.03},
  {name:'Carne bovina acém moído cozido', cal:212.42, carb:0, prot:26.69, fat:10.92, unit:'g', calcMode:'per100', taco:true, sodium:52.36, calcium:4.03, iron:2.65, potassium:255.71},
  {name:'Carne bovina acém moído cru', cal:136.56, carb:0, prot:19.42, fat:5.95, unit:'g', calcMode:'per100', taco:true, sodium:48.61, calcium:2.61, iron:1.76, potassium:237.3},
  {name:'Carne bovina acém sem gordura cozido', cal:214.61, carb:0, prot:27.27, fat:10.88, unit:'g', calcMode:'per100', taco:true, sodium:56.17, calcium:7.11, iron:2.37, potassium:254.42},
  {name:'Carne bovina acém sem gordura cru', cal:144.03, carb:0, prot:20.82, fat:6.11, unit:'g', calcMode:'per100', taco:true, sodium:49.85, calcium:4.72, iron:1.51, potassium:233.65},
  {name:'Carne bovina almôndegas cruas', cal:189.26, carb:9.79, prot:12.31, fat:11.2, unit:'g', calcMode:'per100', taco:true, sodium:621.25, calcium:22.23, iron:1.56, potassium:328.24},
  {name:'Carne bovina almôndegas fritas', cal:271.81, carb:14.29, prot:18.16, fat:15.78, unit:'g', calcMode:'per100', taco:true, sodium:1030.26, calcium:26.76, iron:1.91, potassium:536.1},
  {name:'Carne bovina bucho cozido', cal:133.02, carb:0, prot:21.64, fat:4.5, unit:'g', calcMode:'per100', taco:true, sodium:38.2, calcium:13.21, iron:0.58, potassium:69.81},
  {name:'Carne bovina bucho cru', cal:137.3, carb:0, prot:20.53, fat:5.5, unit:'g', calcMode:'per100', taco:true, sodium:45, calcium:9.07, iron:0.47, potassium:84.57},
  {name:'Carne bovina capa de contra-filé com gordura crua', cal:216.91, carb:0, prot:19.2, fat:14.96, unit:'g', calcMode:'per100', taco:true, sodium:57.54, calcium:5.86, iron:1.51, potassium:266.89},
  {name:'Carne bovina capa de contra-filé com gordura grelhada', cal:311.7, carb:0, prot:30.69, fat:20.03, unit:'g', calcMode:'per100', taco:true, sodium:80.51, calcium:7.26, iron:2.59, potassium:323.45},
  {name:'Carne bovina capa de contra-filé sem gordura crua', cal:131.06, carb:0, prot:21.54, fat:4.33, unit:'g', calcMode:'per100', taco:true, sodium:79.17, calcium:6.5, iron:2.04, potassium:325.43},
  {name:'Carne bovina capa de contra-filé sem gordura grelhada', cal:239.44, carb:-0.01, prot:35.06, fat:9.95, unit:'g', calcMode:'per100', taco:true, sodium:82.75, calcium:8.84, iron:2.84, potassium:384.84},
  {name:'Carne bovina charque cozido', cal:262.78, carb:0, prot:36.36, fat:11.92, unit:'g', calcMode:'per100', taco:true, sodium:1442.7, calcium:14.85, iron:3.45, potassium:89.57},
  {name:'Carne bovina charque cru', cal:248.86, carb:0, prot:22.71, fat:16.84, unit:'g', calcMode:'per100', taco:true, sodium:5875.03, calcium:15.18, iron:1.53, potassium:236.26},
  {name:'Carne bovina contra-filé à milanesa', cal:351.59, carb:12.17, prot:20.61, fat:24, unit:'g', calcMode:'per100', taco:true, fiber:0.37, sodium:77.09, calcium:14.67, iron:2.9, potassium:270.96},
  {name:'Carne bovina contra-filé de costela cru', cal:202.44, carb:0, prot:19.8, fat:13.07, unit:'g', calcMode:'per100', taco:true, sodium:38.52, calcium:3.16, iron:1.56, potassium:245.07},
  {name:'Carne bovina contra-filé de costela grelhado', cal:274.91, carb:0, prot:29.88, fat:16.33, unit:'g', calcMode:'per100', taco:true, sodium:50.88, calcium:4.29, iron:2.79, potassium:382.74},
  {name:'Carne bovina contra-filé com gordura cru', cal:205.86, carb:0, prot:21.15, fat:12.81, unit:'g', calcMode:'per100', taco:true, sodium:44.13, calcium:3.67, iron:1.31, potassium:284.65},
  {name:'Carne bovina contra-filé com gordura grelhado', cal:278.05, carb:0, prot:32.4, fat:15.49, unit:'g', calcMode:'per100', taco:true, sodium:57.07, calcium:4.46, iron:2.35, potassium:351.86},
  {name:'Carne bovina contra-filé sem gordura cru', cal:156.62, carb:0, prot:24, fat:6, unit:'g', calcMode:'per100', taco:true, sodium:52.89, calcium:4.2, iron:1.68, potassium:334.62},
  {name:'Carne bovina contra-filé sem gordura grelhado', cal:193.69, carb:0, prot:35.88, fat:4.49, unit:'g', calcMode:'per100', taco:true, sodium:57.51, calcium:5, iron:2.35, potassium:386.47},
  {name:'Carne bovina costela assada', cal:373.04, carb:0, prot:28.81, fat:27.72, unit:'g', calcMode:'per100', taco:true, sodium:91.86, calcium:28.01, iron:2.18, potassium:270.01},
  {name:'Carne bovina costela crua', cal:357.72, carb:0, prot:16.71, fat:31.75, unit:'g', calcMode:'per100', taco:true, sodium:70, iron:1.2, potassium:151.16},
  {name:'Carne bovina coxão duro sem gordura cozido', cal:216.62, carb:0, prot:31.88, fat:8.92, unit:'g', calcMode:'per100', taco:true, sodium:41.1, calcium:3.98, iron:1.7, potassium:251.66},
  {name:'Carne bovina coxão duro sem gordura cru', cal:147.97, carb:0, prot:21.51, fat:6.22, unit:'g', calcMode:'per100', taco:true, sodium:48.55, calcium:2.95, iron:1.89, potassium:357.88},
  {name:'Carne bovina coxão mole sem gordura cozido', cal:218.68, carb:0, prot:32.38, fat:8.91, unit:'g', calcMode:'per100', taco:true, sodium:43.5, calcium:3.73, iron:2.56, potassium:238.51},
  {name:'Carne bovina coxão mole sem gordura cru', cal:169.07, carb:0, prot:21.23, fat:8.69, unit:'g', calcMode:'per100', taco:true, sodium:60.53, calcium:2.99, iron:1.89, potassium:334.9},
  {name:'Carne bovina cupim assado', cal:330.1, carb:0, prot:28.63, fat:23.04, unit:'g', calcMode:'per100', taco:true, sodium:71.59, calcium:7.62, iron:2.7, potassium:321.07},
  {name:'Carne bovina cupim cru', cal:221.4, carb:0, prot:19.54, fat:15.3, unit:'g', calcMode:'per100', taco:true, sodium:46.86, calcium:3.57, iron:1.13, potassium:150.58},
  {name:'Carne bovina fígado cru', cal:141.05, carb:1.11, prot:20.71, fat:5.36, unit:'g', calcMode:'per100', taco:true, sodium:75.92, calcium:4.16, iron:5.63, potassium:264.5},
  {name:'Carne bovina fígado grelhado', cal:225.03, carb:4.2, prot:29.86, fat:9.01, unit:'g', calcMode:'per100', taco:true, sodium:82.19, calcium:5.56, iron:5.79, potassium:309.37},
  {name:'Carne bovina filé mingnon sem gordura cru', cal:142.86, carb:0, prot:21.6, fat:5.61, unit:'g', calcMode:'per100', taco:true, sodium:48.86, calcium:2.93, iron:1.92, potassium:321.53},
  {name:'Carne bovina filé mingnon sem gordura grelhado', cal:219.7, carb:0, prot:32.8, fat:8.83, unit:'g', calcMode:'per100', taco:true, sodium:57.91, calcium:4.31, iron:2.87, potassium:325.98},
  {name:'Carne bovina flanco sem gordura cozido', cal:195.58, carb:0, prot:29.38, fat:7.77, unit:'g', calcMode:'per100', taco:true, sodium:41.68, calcium:3.53, iron:2.77, potassium:248.8},
  {name:'Carne bovina flanco sem gordura cru', cal:141.46, carb:0, prot:20, fat:6.22, unit:'g', calcMode:'per100', taco:true, sodium:54.22, calcium:2.81, iron:1.58, potassium:324.11},
  {name:'Carne bovina fraldinha com gordura cozida', cal:338.45, carb:0, prot:24.24, fat:26.05, unit:'g', calcMode:'per100', taco:true, sodium:38.78, calcium:3.21, iron:2.03, potassium:206.76},
  {name:'Carne bovina fraldinha com gordura crua', cal:220.72, carb:0, prot:17.58, fat:16.15, unit:'g', calcMode:'per100', taco:true, sodium:51.2, calcium:3.11, iron:1.54, potassium:274.12},
  {name:'Carne bovina lagarto cozido', cal:222.47, carb:0, prot:32.86, fat:9.11, unit:'g', calcMode:'per100', taco:true, sodium:47.54, calcium:3.53, iron:1.85, potassium:254.44},
  {name:'Carne bovina lagarto cru', cal:134.86, carb:0, prot:20.54, fat:5.23, unit:'g', calcMode:'per100', taco:true, sodium:53.56, calcium:2.59, iron:1.32, potassium:361.84},
  {name:'Carne bovina língua cozida', cal:314.9, carb:0, prot:21.37, fat:24.8, unit:'g', calcMode:'per100', taco:true, sodium:59.06, calcium:5.93, iron:2.07, potassium:175.29},
  {name:'Carne bovina língua crua', cal:215.25, carb:0, prot:17.09, fat:15.77, unit:'g', calcMode:'per100', taco:true, sodium:73.05, calcium:5.04, iron:1.7, potassium:250.71},
  {name:'Carne bovina maminha crua', cal:152.77, carb:0, prot:20.93, fat:7.03, unit:'g', calcMode:'per100', taco:true, sodium:37.42, calcium:2.83, iron:1.15, potassium:273.66},
  {name:'Carne bovina maminha grelhada', cal:153.09, carb:0, prot:30.74, fat:2.42, unit:'g', calcMode:'per100', taco:true, sodium:58.12, calcium:4.17, iron:2.43, potassium:386.42},
  {name:'Carne bovina miolo de alcatra sem gordura cru', cal:162.87, carb:0, prot:21.61, fat:7.83, unit:'g', calcMode:'per100', taco:true, sodium:43.05, calcium:3.19, iron:1.97, potassium:298.74},
  {name:'Carne bovina miolo de alcatra sem gordura grelhado', cal:241.36, carb:0, prot:31.93, fat:11.64, unit:'g', calcMode:'per100', taco:true, sodium:51.62, calcium:4.51, iron:3.17, potassium:385.11},
  {name:'Carne bovina músculo sem gordura cozido', cal:193.8, carb:0, prot:31.23, fat:6.7, unit:'g', calcMode:'per100', taco:true, sodium:61.79, calcium:4.98, iron:2.36, potassium:252.56},
  {name:'Carne bovina músculo sem gordura cru', cal:141.58, carb:0, prot:21.56, fat:5.49, unit:'g', calcMode:'per100', taco:true, sodium:66.08, calcium:3.64, iron:1.86, potassium:295.84},
  {name:'Carne bovina paleta com gordura crua', cal:158.71, carb:0, prot:21.41, fat:7.46, unit:'g', calcMode:'per100', taco:true, sodium:64.9, calcium:4.36, iron:1.76, potassium:249.68},
  {name:'Carne bovina paleta sem gordura cozida', cal:193.65, carb:0, prot:29.72, fat:7.4, unit:'g', calcMode:'per100', taco:true, sodium:57.62, calcium:5.64, iron:2.17, potassium:249.81},
  {name:'Carne bovina paleta sem gordura crua', cal:140.94, carb:0, prot:21.03, fat:5.67, unit:'g', calcMode:'per100', taco:true, sodium:65.86, calcium:3.62, iron:1.93, potassium:319.43},
  {name:'Carne bovina patinho sem gordura cru', cal:133.47, carb:0, prot:21.72, fat:4.51, unit:'g', calcMode:'per100', taco:true, sodium:49.13, calcium:3.3, iron:1.78, potassium:317.61},
  {name:'Carne bovina patinho sem gordura grelhado', cal:219.26, carb:0, prot:35.9, fat:7.31, unit:'g', calcMode:'per100', taco:true, sodium:60.29, calcium:4.8, iron:3.03, potassium:420.96},
  {name:'Carne bovina peito sem gordura cozido', cal:338.47, carb:0, prot:22.25, fat:26.99, unit:'g', calcMode:'per100', taco:true, sodium:55.71, calcium:4.03, iron:1.6, potassium:204.49},
  {name:'Carne bovina peito sem gordura cru', cal:259.28, carb:0, prot:17.56, fat:20.43, unit:'g', calcMode:'per100', taco:true, sodium:63.76, calcium:3.94, iron:1.31, potassium:241.4},
  {name:'Carne bovina picanha com gordura crua', cal:212.88, carb:0, prot:18.82, fat:14.69, unit:'g', calcMode:'per100', taco:true, sodium:37.62, calcium:2.42, iron:1.71, potassium:231.65},
  {name:'Carne bovina picanha com gordura grelhada', cal:288.77, carb:0, prot:26.42, fat:19.51, unit:'g', calcMode:'per100', taco:true, sodium:60, calcium:4, iron:3.2, potassium:355},
  {name:'Carne bovina picanha sem gordura crua', cal:133.52, carb:0, prot:21.25, fat:4.74, unit:'g', calcMode:'per100', taco:true, sodium:61.15, calcium:3.39, iron:2.13, potassium:322.5},
  {name:'Carne bovina picanha sem gordura grelhada', cal:238.47, carb:0, prot:31.91, fat:11.33, unit:'g', calcMode:'per100', taco:true, sodium:60.66, calcium:4.43, iron:3.55, potassium:376.6},
  {name:'Carne bovina seca cozida', cal:312.8, carb:0, prot:26.93, fat:21.93, unit:'g', calcMode:'per100', taco:true, sodium:1943.18, calcium:12.76, iron:1.88, potassium:86.03},
  {name:'Carne bovina seca crua', cal:312.75, carb:0, prot:19.66, fat:25.37, unit:'g', calcMode:'per100', taco:true, sodium:4439.55, calcium:14.11, iron:1.33, potassium:190.15},
  {name:'Coxinha de frango frita', cal:283.05, carb:34.52, prot:9.61, fat:11.84, unit:'g', calcMode:'per100', taco:true, fiber:4.97, sodium:532.13, calcium:18.33, iron:1.26, potassium:166.2},
  {name:'Croquete de carne cru', cal:245.77, carb:13.95, prot:12.04, fat:15.56, unit:'g', calcMode:'per100', taco:true, sodium:710.64, calcium:15.5, iron:2.51, potassium:221.4},
  {name:'Croquete de carne frito', cal:346.74, carb:18.15, prot:16.86, fat:22.67, unit:'g', calcMode:'per100', taco:true, sodium:916.41, calcium:18.09, iron:2.31, potassium:313.02},
  {name:'Empada de frango pré-cozida assada', cal:358.19, carb:47.49, prot:6.94, fat:15.6, unit:'g', calcMode:'per100', taco:true, fiber:2.16, sodium:524.93, calcium:15.61, iron:1.19, potassium:137.66},
  {name:'Empada de frango pré-cozida', cal:377.48, carb:35.53, prot:7.34, fat:22.89, unit:'g', calcMode:'per100', taco:true, fiber:2.22, sodium:770.73, calcium:13.56, iron:0.75, potassium:156.36},
  {name:'Frango asa com pele crua', cal:213.19, carb:0, prot:18.1, fat:15.07, unit:'g', calcMode:'per100', taco:true, sodium:96.3, calcium:10.92, iron:0.57, potassium:211.16},
  {name:'Frango caipira inteiro com pele cozido', cal:242.89, carb:0, prot:23.88, fat:15.62, unit:'g', calcMode:'per100', taco:true, sodium:56.09, calcium:16.76, iron:1.66, potassium:210.01},
  {name:'Frango caipira inteiro sem pele cozido', cal:195.76, carb:0, prot:29.58, fat:7.7, unit:'g', calcMode:'per100', taco:true, sodium:53.24, calcium:66.14, iron:2.12, potassium:223.59},
  {name:'Frango coração cru', cal:221.5, carb:0, prot:12.58, fat:18.6, unit:'g', calcMode:'per100', taco:true, sodium:95.06, calcium:5.51, iron:4.09, potassium:220.07},
  {name:'Frango coração grelhado', cal:207.27, carb:0.61, prot:22.44, fat:12.1, unit:'g', calcMode:'per100', taco:true, sodium:128.24, calcium:8.35, iron:6.53, potassium:242.69},
  {name:'Frango coxa com pele assada', cal:215.12, carb:0.06, prot:28.49, fat:10.36, unit:'g', calcMode:'per100', taco:true, sodium:94.84, calcium:8.34, iron:1.22, potassium:318.11},
  {name:'Frango coxa com pele crua', cal:161.47, carb:0, prot:17.09, fat:9.81, unit:'g', calcMode:'per100', taco:true, sodium:94.96, calcium:8, iron:0.7, potassium:274.73},
  {name:'Frango coxa sem pele cozida', cal:167.43, carb:0, prot:26.86, fat:5.85, unit:'g', calcMode:'per100', taco:true, sodium:64.34, calcium:11.78, iron:0.83, potassium:191.14},
  {name:'Frango coxa sem pele crua', cal:119.95, carb:0.02, prot:17.81, fat:4.86, unit:'g', calcMode:'per100', taco:true, sodium:98.37, calcium:7.97, iron:0.78, potassium:291.19},
  {name:'Frango fígado cru', cal:106.48, carb:-0.02, prot:17.59, fat:3.49, unit:'g', calcMode:'per100', taco:true, sodium:82.43, calcium:5.61, iron:9.54, potassium:280.5},
  {name:'Frango filé à milanesa', cal:220.87, carb:7.51, prot:28.46, fat:7.79, unit:'g', calcMode:'per100', taco:true, fiber:1.13, sodium:122.33, calcium:8.91, iron:1.08, potassium:407.56},
  {name:'Frango inteiro com pele cru', cal:226.32, carb:0, prot:16.44, fat:17.31, unit:'g', calcMode:'per100', taco:true, sodium:62.88, calcium:6.3, iron:0.62, potassium:217.24},
  {name:'Frango inteiro sem pele assado', cal:187.34, carb:0, prot:28.02, fat:7.5, unit:'g', calcMode:'per100', taco:true, sodium:70.27, calcium:9.06, iron:0.55, potassium:283.27},
  {name:'Frango inteiro sem pele cozido', cal:170.39, carb:0, prot:24.99, fat:7.06, unit:'g', calcMode:'per100', taco:true, sodium:50.89, calcium:8.18, iron:0.46, potassium:216.53},
  {name:'Frango inteiro sem pele cru', cal:129.1, carb:0, prot:20.59, fat:4.57, unit:'g', calcMode:'per100', taco:true, sodium:72.96, calcium:6.52, iron:0.54, potassium:237.68},
  {name:'Frango peito com pele assado', cal:211.68, carb:0, prot:33.42, fat:7.65, unit:'g', calcMode:'per100', taco:true, sodium:55.7, calcium:8.26, iron:0.48, potassium:380.31},
  {name:'Frango peito com pele cru', cal:149.47, carb:0, prot:20.78, fat:6.73, unit:'g', calcMode:'per100', taco:true, sodium:62.31, calcium:8.42, iron:0.44, potassium:251.82},
  {name:'Frango peito sem pele cozido', cal:162.87, carb:0, prot:31.47, fat:3.16, unit:'g', calcMode:'per100', taco:true, sodium:36.17, calcium:6.44, iron:0.34, potassium:231.05},
  {name:'Frango peito sem pele cru', cal:119.16, carb:0, prot:21.53, fat:3.02, unit:'g', calcMode:'per100', taco:true, sodium:56.14, calcium:7.36, iron:0.43, potassium:267.09},
  {name:'Frango peito sem pele grelhado', cal:159.19, carb:0, prot:32.03, fat:2.48, unit:'g', calcMode:'per100', taco:true, sodium:50.25, calcium:5.34, iron:0.33, potassium:387.37},
  {name:'Frango sobrecoxa com pele assada', cal:259.6, carb:0, prot:28.7, fat:15.19, unit:'g', calcMode:'per100', taco:true, sodium:95.94, calcium:10.68, iron:1.21, potassium:323.07},
  {name:'Frango sobrecoxa com pele crua', cal:254.53, carb:0, prot:15.46, fat:20.9, unit:'g', calcMode:'per100', taco:true, sodium:68.27, calcium:7.09, iron:0.71, potassium:190.19},
  {name:'Frango sobrecoxa sem pele assada', cal:232.88, carb:0, prot:29.18, fat:12.01, unit:'g', calcMode:'per100', taco:true, sodium:106.08, calcium:12.25, iron:1.17, potassium:382.21},
  {name:'Frango sobrecoxa sem pele crua', cal:161.8, carb:0, prot:17.57, fat:9.62, unit:'g', calcMode:'per100', taco:true, sodium:79.75, calcium:6.29, iron:0.9, potassium:241.09},
  {name:'Hambúrguer bovino cru', cal:214.84, carb:4.15, prot:13.16, fat:16.18, unit:'g', calcMode:'per100', taco:true, sodium:869.46, calcium:34.06, iron:1.89, potassium:382.59},
  {name:'Hambúrguer bovino frito', cal:258.28, carb:6.32, prot:19.97, fat:17.01, unit:'g', calcMode:'per100', taco:true, sodium:1251.8, calcium:62.39, iron:3.02, potassium:660.09},
  {name:'Hambúrguer bovino grelhado', cal:209.83, carb:11.33, prot:13.16, fat:12.43, unit:'g', calcMode:'per100', taco:true, sodium:1090.33, calcium:56.21, iron:2.64, potassium:537.56},
  {name:'Lingüiça frango crua', cal:218.11, carb:0, prot:14.24, fat:17.44, unit:'g', calcMode:'per100', taco:true, sodium:1125.81, calcium:10.84, iron:0.47, potassium:279.73},
  {name:'Lingüiça frango frita', cal:245.46, carb:0, prot:18.32, fat:18.54, unit:'g', calcMode:'per100', taco:true, sodium:1373.89, calcium:15.48, iron:0.79, potassium:363.79},
  {name:'Lingüiça frango grelhada', cal:243.66, carb:0, prot:18.19, fat:18.4, unit:'g', calcMode:'per100', taco:true, sodium:1351.49, calcium:13.93, iron:0.72, potassium:356},
  {name:'Lingüiça porco crua', cal:227.2, carb:0, prot:16.06, fat:17.58, unit:'g', calcMode:'per100', taco:true, sodium:1175.72, calcium:6.13, iron:0.44, potassium:316.33},
  {name:'Lingüiça porco frita', cal:279.54, carb:0, prot:20.45, fat:21.31, unit:'g', calcMode:'per100', taco:true, sodium:1431.59, calcium:8.48, iron:0.87, potassium:408.94},
  {name:'Lingüiça porco grelhada', cal:296.49, carb:0, prot:23.17, fat:21.9, unit:'g', calcMode:'per100', taco:true, sodium:1455.86, calcium:8.14, iron:1.01, potassium:426.6},
  {name:'Mortadela', cal:268.82, carb:5.82, prot:11.95, fat:21.65, unit:'g', calcMode:'per100', taco:true, sodium:1212.17, calcium:66.55, iron:1.47, potassium:247.28},
  {name:'Peru congelado assado', cal:163.07, carb:0, prot:26.2, fat:5.68, unit:'g', calcMode:'per100', taco:true, sodium:627.88, calcium:13.84, iron:0.59, potassium:175.12},
  {name:'Peru congelado cru', cal:93.72, carb:0, prot:18.08, fat:1.83, unit:'g', calcMode:'per100', taco:true, sodium:710.68, calcium:9.88, iron:0.87, potassium:281.35},
  {name:'Porco bisteca crua', cal:164.12, carb:0, prot:21.5, fat:8.02, unit:'g', calcMode:'per100', taco:true, sodium:54.29, calcium:6.11, iron:0.53, potassium:334.99},
  {name:'Porco bisteca frita', cal:311.17, carb:0, prot:33.75, fat:18.52, unit:'g', calcMode:'per100', taco:true, sodium:63.03, calcium:69.15, iron:0.82, potassium:403.51},
  {name:'Porco bisteca grelhada', cal:280.08, carb:0, prot:28.89, fat:17.38, unit:'g', calcMode:'per100', taco:true, sodium:51.44, calcium:34.31, iron:0.86, potassium:366.42},
  {name:'Porco costela assada', cal:402.17, carb:0, prot:30.22, fat:30.28, unit:'g', calcMode:'per100', taco:true, sodium:62.68, calcium:16.77, iron:1.04, potassium:245.97},
  {name:'Porco costela crua', cal:255.61, carb:0, prot:18, fat:19.82, unit:'g', calcMode:'per100', taco:true, sodium:87.98, calcium:14.53, iron:0.9, potassium:248.23},
  {name:'Porco lombo assado', cal:210.23, carb:0, prot:35.72, fat:6.4, unit:'g', calcMode:'per100', taco:true, sodium:38.92, calcium:19.51, iron:0.46, potassium:311.14},
  {name:'Porco lombo cru', cal:175.63, carb:0, prot:22.6, fat:8.77, unit:'g', calcMode:'per100', taco:true, sodium:53.07, calcium:4.16, iron:0.47, potassium:334.38},
  {name:'Porco orelha salgada crua', cal:258.49, carb:0, prot:18.52, fat:19.89, unit:'g', calcMode:'per100', taco:true, sodium:615.6, calcium:5.44, iron:1.41, potassium:228.46},
  {name:'Porco pernil assado', cal:262.26, carb:0, prot:32.13, fat:13.86, unit:'g', calcMode:'per100', taco:true, sodium:62.41, calcium:17.59, iron:1.25, potassium:395.19},
  {name:'Porco pernil cru', cal:186.06, carb:0, prot:20.12, fat:11.1, unit:'g', calcMode:'per100', taco:true, sodium:101.89, calcium:12.94, iron:0.89, potassium:255.58},
  {name:'Porco rabo salgado cru', cal:377.42, carb:0, prot:15.58, fat:34.47, unit:'g', calcMode:'per100', taco:true, sodium:1157.67, calcium:21.63, iron:0.62, potassium:23.76},
  {name:'Presunto com capa de gordura', cal:127.85, carb:1.4, prot:14.37, fat:6.77, unit:'g', calcMode:'per100', taco:true, sodium:1020.77, calcium:12.48, iron:0.68, potassium:294.58},
  {name:'Presunto sem capa de gordura', cal:93.74, carb:2.15, prot:14.29, fat:2.71, unit:'g', calcMode:'per100', taco:true, sodium:1039.18, calcium:23.27, iron:0.83, potassium:307.3},
  {name:'Quibe assado', cal:136.23, carb:12.86, prot:14.59, fat:2.68, unit:'g', calcMode:'per100', taco:true, fiber:1.9, sodium:39.89, calcium:15.62, iron:2.15, potassium:287.78},
  {name:'Quibe cru', cal:109.49, carb:10.77, prot:12.35, fat:1.67, unit:'g', calcMode:'per100', taco:true, fiber:1.65, sodium:38.77, calcium:12.09, iron:1.65, potassium:241.74},
  {name:'Quibe frito', cal:253.83, carb:12.34, prot:14.89, fat:15.8, unit:'g', calcMode:'per100', taco:true, sodium:835.82, calcium:21.73, iron:1.95, potassium:322.47},
  {name:'Salame', cal:397.84, carb:2.91, prot:25.81, fat:30.64, unit:'g', calcMode:'per100', taco:true, sodium:1574.17, calcium:87.02, iron:1.25, potassium:548},
  {name:'Toucinho cru', cal:592.53, carb:0, prot:11.48, fat:60.26, unit:'g', calcMode:'per100', taco:true, sodium:49.59, calcium:2.39, iron:0.44, potassium:57.57},
  {name:'Toucinho frito', cal:696.56, carb:0, prot:27.28, fat:64.31, unit:'g', calcMode:'per100', taco:true, sodium:124.85, calcium:9.44, iron:0.86, potassium:170.86},
  {name:'Bebida láctea pêssego', cal:55.16, carb:7.57, prot:2.13, fat:1.91, unit:'g', calcMode:'per100', taco:true, fiber:0.29, sodium:46.26, calcium:88.63, iron:0, potassium:62.26},
  {name:'Creme de Leite', cal:221.48, carb:4.51, prot:1.51, fat:22.48, unit:'g', calcMode:'per100', taco:true, sodium:51.72, calcium:82.73, iron:0.3, potassium:118.65},
  {name:'Iogurte natural', cal:51.49, carb:1.92, prot:4.06, fat:3.04, unit:'g', calcMode:'per100', taco:true, sodium:51.62, calcium:143.1, iron:0, potassium:71.28},
  {name:'Iogurte natural desnatado', cal:41.49, carb:5.77, prot:3.83, fat:0.32, unit:'g', calcMode:'per100', taco:true, sodium:59.64, calcium:156.96, iron:0, potassium:182.13},
  {name:'Iogurte sabor morango', cal:69.57, carb:9.69, prot:2.71, fat:2.33, unit:'g', calcMode:'per100', taco:true, fiber:0.22, sodium:37.66, calcium:101.03, iron:0, potassium:52.35},
  {name:'Iogurte sabor pêssego', cal:67.85, carb:9.43, prot:2.53, fat:2.34, unit:'g', calcMode:'per100', taco:true, fiber:0.72, sodium:36.96, calcium:95.05, iron:0.05, potassium:52.09},
  {name:'Leite condensado', cal:312.57, carb:57, prot:7.67, fat:6.74, unit:'ml', calcMode:'per100', taco:true, sodium:93.8, calcium:246.27, iron:0.13, potassium:328.93},
  {name:'Leite de cabra', cal:66.42, carb:5.25, prot:3.07, fat:3.75, unit:'ml', calcMode:'per100', taco:true, sodium:73.95, calcium:112.25, iron:0.1, potassium:139.99},
  {name:'Leite de vaca achocolatado', cal:82.82, carb:14.16, prot:2.1, fat:2.17, unit:'ml', calcMode:'per100', taco:true, fiber:0.65, sodium:71.74, calcium:69.79, iron:0.46, potassium:155.24},
  {name:'Leite de vaca desnatado pó', cal:361.61, carb:53.04, prot:34.69, fat:0.93, unit:'ml', calcMode:'per100', taco:true, sodium:431.67, calcium:1363.17, iron:0.93, potassium:1555.66},
  {name:'Leite de vaca integral pó', cal:496.65, carb:39.18, prot:25.42, fat:26.9, unit:'ml', calcMode:'per100', taco:true, sodium:323.2, calcium:890.27, iron:0.52, potassium:1131.66},
  {name:'Leite fermentado', cal:69.62, carb:15.67, prot:1.89, fat:0.1, unit:'ml', calcMode:'per100', taco:true, sodium:33.43, calcium:71.53, iron:0, potassium:94.48},
  {name:'Queijo minas frescal', cal:264.27, carb:3.24, prot:17.41, fat:20.18, unit:'g', calcMode:'per100', taco:true, sodium:31.23, calcium:579.25, iron:0.93, potassium:104.85},
  {name:'Queijo minas meia cura', cal:320.72, carb:3.57, prot:21.21, fat:24.61, unit:'g', calcMode:'per100', taco:true, sodium:501.17, calcium:695.92, iron:0.22, potassium:119.98},
  {name:'Queijo mozarela', cal:329.87, carb:3.05, prot:22.65, fat:25.18, unit:'g', calcMode:'per100', taco:true, sodium:581.36, calcium:875.04, iron:0.31, potassium:61.89},
  {name:'Queijo parmesão', cal:452.96, carb:1.66, prot:35.55, fat:33.53, unit:'g', calcMode:'per100', taco:true, sodium:1844.08, calcium:991.97, iron:0.53, potassium:96.24},
  {name:'Queijo pasteurizado', cal:303.08, carb:5.68, prot:9.36, fat:27.44, unit:'g', calcMode:'per100', taco:true, sodium:780.43, calcium:323.3, iron:0.27, potassium:193.72},
  {name:'Queijo petit suisse morango', cal:121.11, carb:18.46, prot:5.79, fat:2.84, unit:'g', calcMode:'per100', taco:true, sodium:412.47, calcium:730.93, iron:0.14, potassium:121.46},
  {name:'Queijo prato', cal:359.88, carb:1.88, prot:22.66, fat:29.11, unit:'g', calcMode:'per100', taco:true, sodium:579.77, calcium:939.99, iron:0.28, potassium:73.47},
  {name:'Maria mole (queijo)', cal:256.58, carb:2.43, prot:9.63, fat:23.44, unit:'g', calcMode:'per100', taco:true, sodium:557.92, calcium:259.47, iron:0.12, potassium:93.06},
  {name:'Queijo ricota', cal:139.73, carb:3.79, prot:12.6, fat:8.11, unit:'g', calcMode:'per100', taco:true, sodium:282.58, calcium:253.24, iron:0.14, potassium:112.38},
  {name:'Bebida isotônica sabores variados', cal:25.61, carb:6.4, prot:0, fat:0, unit:'ml', calcMode:'per100', taco:true, sodium:44.08, calcium:1.23, iron:0.67, potassium:13.03},
  {name:'Café infusão 10%', cal:9.07, carb:1.48, prot:0.71, fat:0.07, unit:'ml', calcMode:'per100', taco:true, sodium:1.03, calcium:3.16, iron:0, potassium:155.7},
  {name:'Cana aguardente 1', cal:215.66, carb:0, prot:0, fat:0, unit:'ml', calcMode:'per100', taco:true, sodium:3.15, calcium:0, iron:0, potassium:0},
  {name:'Cana caldo de', cal:65.34, carb:18.15, prot:0, fat:0, unit:'ml', calcMode:'per100', taco:true, fiber:0.14, sodium:0, calcium:9.08, iron:0.75, potassium:17.97},
  {name:'Cerveja pilsen 2', cal:40.72, carb:3.32, prot:0.56, fat:0, unit:'ml', calcMode:'per100', taco:true, sodium:4.23, calcium:4.99, iron:0, potassium:29.47},
  {name:'Chá erva-doce infusão 5%', cal:1.4, carb:0.39, prot:0, fat:0, unit:'ml', calcMode:'per100', taco:true, sodium:0.63, calcium:1.93, iron:0, potassium:9.93},
  {name:'Chá mate infusão 5%', cal:2.73, carb:0.64, prot:0, fat:0.05, unit:'ml', calcMode:'per100', taco:true, sodium:0, calcium:0.64, iron:0, potassium:5.34},
  {name:'Chá preto infusão 5%', cal:2.25, carb:0.63, prot:0, fat:0, unit:'ml', calcMode:'per100', taco:true, sodium:0, calcium:0.25, iron:0, potassium:13.44},
  {name:'Coco água de', cal:21.51, carb:5.28, prot:0, fat:0, unit:'ml', calcMode:'per100', taco:true, fiber:0.13, sodium:1.78, calcium:18.84, iron:0, potassium:161.65},
  {name:'Refrigerante tipo água tônica', cal:30.78, carb:7.95, prot:0, fat:0, unit:'ml', calcMode:'per100', taco:true, sodium:8.29, calcium:1.08, iron:0, potassium:1.51},
  {name:'Refrigerante tipo cola', cal:33.51, carb:8.66, prot:0, fat:0, unit:'ml', calcMode:'per100', taco:true, sodium:7.12, calcium:1.37, iron:0, potassium:0.9},
  {name:'Refrigerante tipo guaraná', cal:38.7, carb:10, prot:0, fat:0, unit:'ml', calcMode:'per100', taco:true, sodium:9.01, calcium:1.41, iron:0, potassium:1.38},
  {name:'Refrigerante tipo laranja', cal:45.63, carb:11.79, prot:0, fat:0, unit:'ml', calcMode:'per100', taco:true, sodium:9.27, calcium:2.34, iron:0, potassium:15.5},
  {name:'Refrigerante tipo limão', cal:39.72, carb:10.26, prot:0, fat:0, unit:'ml', calcMode:'per100', taco:true, sodium:8.8, calcium:1.75, iron:0, potassium:4.27},
  {name:'Omelete de queijo', cal:268.01, carb:0.44, prot:15.57, fat:22.01, unit:'g', calcMode:'per100', taco:true, sodium:216.05, calcium:165.73, iron:1.37, potassium:126.93},
  {name:'Ovo de codorna inteiro cru', cal:176.89, carb:0.77, prot:13.69, fat:12.68, unit:'g', calcMode:'per100', taco:true, sodium:128.99, calcium:78.73, iron:3.35, potassium:78.73},
  {name:'Ovo de galinha clara cozida/10minutos', cal:59.44, carb:0, prot:13.45, fat:0.09, unit:'g', calcMode:'per100', taco:true, sodium:180.54, calcium:6.23, iron:0.08, potassium:145.87},
  {name:'Ovo de galinha gema cozida/10minutos', cal:352.67, carb:1.56, prot:15.9, fat:30.78, unit:'g', calcMode:'per100', taco:true, sodium:44.91, calcium:114.43, iron:2.92, potassium:87.38},
  {name:'Ovo de galinha inteiro cozido/10minutos', cal:145.7, carb:0.61, prot:13.29, fat:9.48, unit:'g', calcMode:'per100', taco:true, sodium:145.9, calcium:49.22, iron:1.52, potassium:138.9},
  {name:'Ovo de galinha inteiro cru', cal:143.11, carb:1.64, prot:13.03, fat:8.9, unit:'g', calcMode:'per100', taco:true, sodium:167.91, calcium:42.02, iron:1.56, potassium:150},
  {name:'Ovo de galinha inteiro frito', cal:240.19, carb:1.19, prot:15.62, fat:18.59, unit:'g', calcMode:'per100', taco:true, sodium:166.11, calcium:72.89, iron:2.1, potassium:184.01},
  {name:'Achocolatado pó', cal:401.02, carb:91.18, prot:4.2, fat:2.17, unit:'g', calcMode:'per100', taco:true, fiber:3.89, sodium:64.79, calcium:44.4, iron:5.36, potassium:496.45},
  {name:'Açúcar cristal', cal:386.85, carb:99.61, prot:0.32, fat:0, unit:'g', calcMode:'per100', taco:true, sodium:0, calcium:7.59, iron:0.16, potassium:2.56},
  {name:'Açúcar mascavo', cal:368.55, carb:94.45, prot:0.76, fat:0.09, unit:'g', calcMode:'per100', taco:true, sodium:25.2, calcium:126.53, iron:8.3, potassium:521.63},
  {name:'Açúcar refinado', cal:386.57, carb:99.54, prot:0.32, fat:0, unit:'g', calcMode:'per100', taco:true, sodium:12.16, calcium:3.5, iron:0.11, potassium:6.35},
  {name:'Chocolate ao leite', cal:539.59, carb:59.58, prot:7.22, fat:30.27, unit:'g', calcMode:'per100', taco:true, fiber:2.17, sodium:77.1, calcium:191.19, iron:1.58, potassium:354.51},
  {name:'Chocolate ao leite com castanha do Pará', cal:558.88, carb:55.38, prot:7.41, fat:34.19, unit:'g', calcMode:'per100', taco:true, fiber:2.46, sodium:64.05, calcium:171.23, iron:1.47, potassium:430.92},
  {name:'Chocolate ao leite dietético', cal:556.82, carb:56.32, prot:6.9, fat:33.77, unit:'g', calcMode:'per100', taco:true, fiber:2.85, sodium:84.71, calcium:187.89, iron:3.31, potassium:458.4},
  {name:'Chocolate meio amargo', cal:474.92, carb:62.42, prot:4.86, fat:29.86, unit:'g', calcMode:'per100', taco:true, fiber:4.94, sodium:8.87, calcium:44.67, iron:3.61, potassium:431.7},
  {name:'Cocada branca', cal:448.85, carb:81.38, prot:1.12, fat:13.59, unit:'g', calcMode:'per100', taco:true, fiber:3.57, sodium:28.99, calcium:7.06, iron:1.24, potassium:183.07},
  {name:'Doce de abóbora cremoso', cal:198.94, carb:54.61, prot:0.92, fat:0.21, unit:'g', calcMode:'per100', taco:true, fiber:2.28, sodium:0, calcium:12.99, iron:0.85, potassium:136.75},
  {name:'Doce de leite cremoso', cal:306.31, carb:59.49, prot:5.48, fat:5.99, unit:'g', calcMode:'per100', taco:true, sodium:120.09, calcium:195.1, iron:0.07, potassium:259.46},
  {name:'Geléia mocotó natural', cal:106.09, carb:24.23, prot:2.12, fat:0.07, unit:'g', calcMode:'per100', taco:true, sodium:42.68, calcium:3.52, iron:0.12, potassium:2},
  {name:'Glicose de milho', cal:292.12, carb:79.38, prot:0, fat:0, unit:'g', calcMode:'per100', taco:true, sodium:58.93, calcium:5.67, iron:0.05, potassium:5.06},
  {name:'Maria mole', cal:301.24, carb:73.55, prot:3.81, fat:0.19, unit:'g', calcMode:'per100', taco:true, fiber:0.67, sodium:15.31, calcium:13.36, iron:0.39, potassium:23.56},
  {name:'Maria mole coco queimado', cal:306.63, carb:75.06, prot:3.93, fat:0.09, unit:'g', calcMode:'per100', taco:true, fiber:0.64, sodium:14.29, calcium:19.46, iron:0.47, potassium:35.96},
  {name:'Marmelada', cal:257.24, carb:70.76, prot:0.4, fat:0.14, unit:'g', calcMode:'per100', taco:true, fiber:4.07, sodium:10.88, calcium:11.32, iron:0.73, potassium:83.15},
  {name:'Mel de abelha', cal:309.24, carb:84.03, prot:0, fat:0, unit:'g', calcMode:'per100', taco:true, sodium:6.04, calcium:10.2, iron:0.25, potassium:99.32},
  {name:'Melado', cal:296.51, carb:76.62, prot:0, fat:0, unit:'g', calcMode:'per100', taco:true, sodium:4.01, calcium:102.06, iron:5.39, potassium:395.06},
  {name:'Quindim', cal:411.35, carb:46.3, prot:4.74, fat:24.42, unit:'g', calcMode:'per100', taco:true, fiber:3.22, sodium:27.37, calcium:37.18, iron:1.38, potassium:111},
  {name:'Rapadura', cal:351.96, carb:90.79, prot:0.99, fat:0.07, unit:'g', calcMode:'per100', taco:true, sodium:21.71, calcium:30.49, iron:4.44, potassium:458.87},
  {name:'Café pó torrado', cal:418.62, carb:65.75, prot:14.7, fat:11.95, unit:'g', calcMode:'per100', taco:true, fiber:51.23, sodium:1.13, calcium:106.89, iron:8.13, potassium:1608.58},
  {name:'Capuccino pó', cal:417.41, carb:73.61, prot:11.31, fat:8.63, unit:'g', calcMode:'per100', taco:true, fiber:2.44, sodium:382.29, calcium:466.59, iron:2.28, potassium:885.8},
  {name:'Fermento em pó químico', cal:89.72, carb:43.91, prot:0.48, fat:0.07, unit:'g', calcMode:'per100', taco:true, sodium:10052.41},
  {name:'Fermento biológico levedura tablete', cal:89.79, carb:7.7, prot:16.96, fat:1.52, unit:'g', calcMode:'per100', taco:true, fiber:4.17, sodium:39.61, calcium:18.01, iron:2.62, potassium:576.24},
  {name:'Gelatina sabores variados pó', cal:380.22, carb:89.22, prot:8.89, fat:0, unit:'g', calcMode:'per100', taco:true, sodium:234.92, calcium:26.84, iron:0.33, potassium:7.25},
  {name:'Shoyu', cal:60.93, carb:11.65, prot:3.31, fat:0.33, unit:'g', calcMode:'per100', taco:true, sodium:5024.21, calcium:14.53, iron:0.5, potassium:165.18},
  {name:'Tempero a base de sal', cal:21.33, carb:2.07, prot:2.67, fat:0.26, unit:'g', calcMode:'per100', taco:true, fiber:0.56, sodium:32560},
  {name:'Azeitona preta conserva', cal:194.15, carb:5.54, prot:1.16, fat:20.34, unit:'g', calcMode:'per100', taco:true, fiber:4.56, sodium:1566.66, calcium:58.75, iron:5.45, potassium:78.57},
  {name:'Azeitona verde conserva', cal:136.94, carb:4.1, prot:0.95, fat:14.22, unit:'g', calcMode:'per100', taco:true, fiber:3.85, sodium:1347.18, calcium:45.64, iron:0.18, potassium:19.81},
  {name:'Chantilly spray com gordura vegetal', cal:314.96, carb:16.86, prot:0.52, fat:27.27, unit:'g', calcMode:'per100', taco:true, sodium:109.7, calcium:2.27, iron:0, potassium:5.11},
  {name:'Leite de coco', cal:166.16, carb:2.19, prot:1.01, fat:18.36, unit:'ml', calcMode:'per100', taco:true, fiber:0.68, sodium:44.29, calcium:5.85, iron:0.46, potassium:143.67},
  {name:'Maionese tradicional com ovos', cal:302.15, carb:7.9, prot:0.58, fat:30.5, unit:'g', calcMode:'per100', taco:true, sodium:786.83, calcium:3.48, iron:0.1, potassium:16.09},
  {name:'Acarajé', cal:289.21, carb:19.11, prot:8.35, fat:19.93, unit:'g', calcMode:'per100', taco:true, fiber:9.36, sodium:304.89, calcium:124.42, iron:1.93, potassium:353.66},
  {name:'Arroz carreteiro', cal:153.77, carb:11.58, prot:10.83, fat:7.12, unit:'g', calcMode:'per100', taco:true, fiber:1.5, sodium:1621.73, calcium:13.26, iron:0.96, potassium:87.15},
  {name:'Baião de dois arroz e feijão-de-corda', cal:135.68, carb:20.42, prot:6.24, fat:3.23, unit:'g', calcMode:'per100', taco:true, fiber:5.07, sodium:93.3, calcium:33.3, iron:0.56, potassium:157.31},
  {name:'Barreado', cal:164.98, carb:0.24, prot:18.27, fat:9.53, unit:'g', calcMode:'per100', taco:true, fiber:0.15, sodium:47.63, calcium:14.51, iron:2.44, potassium:294.56},
  {name:'Bife à cavalo com contra filé', cal:291.23, carb:0, prot:23.66, fat:21.15, unit:'g', calcMode:'per100', taco:true, sodium:82.87, calcium:25.98, iron:2.1, potassium:272.23},
  {name:'Bolinho de arroz', cal:273.51, carb:41.68, prot:8.04, fat:8.29, unit:'g', calcMode:'per100', taco:true, fiber:2.74, sodium:58.86, calcium:23.57, iron:2.12, potassium:96.45},
  {name:'Camarão à baiana', cal:100.78, carb:3.17, prot:7.94, fat:5.97, unit:'g', calcMode:'per100', taco:true, fiber:0.39, sodium:84.79, calcium:42.68, iron:1.42, potassium:139.14},
  {name:'Charuto de repolho', cal:78.23, carb:10.13, prot:6.78, fat:1.12, unit:'g', calcMode:'per100', taco:true, fiber:1.46, sodium:12.1, calcium:22.89, iron:0.86, potassium:184.03},
  {name:'Cuscuz de milho cozido com sal', cal:113.46, carb:25.28, prot:2.16, fat:0.68, unit:'g', calcMode:'per100', taco:true, fiber:2.05, sodium:247.67, calcium:1.54, iron:0.17, potassium:10.85},
  {name:'Cuscuz paulista', cal:142.12, carb:22.51, prot:2.56, fat:4.65, unit:'g', calcMode:'per100', taco:true, fiber:2.43, sodium:235.71, calcium:14.16, iron:0.33, potassium:52.93},
  {name:'Cuxá molho', cal:80.09, carb:5.74, prot:5.64, fat:3.59, unit:'g', calcMode:'per100', taco:true, fiber:3.02, sodium:1344.29, calcium:105.48, iron:0.94, potassium:124.06},
  {name:'Dobradinha', cal:124.5, carb:0, prot:19.77, fat:4.44, unit:'g', calcMode:'per100', taco:true, sodium:28.77, calcium:11.34, iron:1.01, potassium:57.58},
  {name:'Estrogonofe de carne', cal:173.14, carb:2.98, prot:15.03, fat:10.8, unit:'g', calcMode:'per100', taco:true, sodium:122.85, calcium:28.32, iron:2.7, potassium:322.31},
  {name:'Estrogonofe de frango', cal:156.81, carb:2.59, prot:17.55, fat:7.96, unit:'g', calcMode:'per100', taco:true, sodium:99.46, calcium:26.05, iron:1.52, potassium:307.09},
  {name:'Feijão tropeiro mineiro', cal:151.56, carb:19.58, prot:10.17, fat:6.79, unit:'g', calcMode:'per100', taco:true, fiber:3.57, sodium:365.07, calcium:41.2, iron:2.16, potassium:348.93},
  {name:'Feijoada', cal:116.93, carb:11.64, prot:8.67, fat:6.48, unit:'g', calcMode:'per100', taco:true, fiber:5.09, sodium:278.22, calcium:32.38, iron:1.35, potassium:303.49},
  {name:'Frango com açafrão', cal:112.78, carb:4.06, prot:9.7, fat:6.17, unit:'g', calcMode:'per100', taco:true, fiber:0.22, sodium:28.81, calcium:12.99, iron:0.84, potassium:256.37},
  {name:'Macarrão molho bolognesa', cal:119.53, carb:22.52, prot:4.93, fat:0.89, unit:'g', calcMode:'per100', taco:true, fiber:0.78, sodium:8.94, calcium:10.55, iron:1.39, potassium:83.57},
  {name:'Maniçoba', cal:134.22, carb:3.42, prot:9.96, fat:8.7, unit:'g', calcMode:'per100', taco:true, fiber:2.16, sodium:406.7, calcium:65.98, iron:3.22, potassium:147.71},
  {name:'Quibebe', cal:86.35, carb:6.64, prot:8.56, fat:2.67, unit:'g', calcMode:'per100', taco:true, fiber:1.67, sodium:246.61, calcium:7.68, iron:0.78, potassium:152.81},
  {name:'Salada de legumes com maionese', cal:96.1, carb:8.92, prot:1.05, fat:7.04, unit:'g', calcMode:'per100', taco:true, fiber:2.22, sodium:228.43, calcium:12.13, iron:0.23, potassium:141.29},
  {name:'Salada de legumes cozida no vapor', cal:35.41, carb:7.09, prot:2.01, fat:0.31, unit:'g', calcMode:'per100', taco:true, fiber:2.51, sodium:2.51, calcium:32.9, iron:0.44, potassium:244.3},
  {name:'Salpicão de frango', cal:147.86, carb:4.57, prot:13.92, fat:7.84, unit:'g', calcMode:'per100', taco:true, fiber:0.41, sodium:248.35, calcium:9.41, iron:0.32, potassium:148.97},
  {name:'Sarapatel', cal:122.98, carb:1.09, prot:18.47, fat:4.42, unit:'g', calcMode:'per100', taco:true, sodium:215.62, calcium:12.23, iron:7.18, potassium:198.76},
  {name:'Tabule', cal:57.45, carb:10.58, prot:2.05, fat:1.21, unit:'g', calcMode:'per100', taco:true, fiber:2.08, sodium:1.19, calcium:18.85, iron:0.55, potassium:187.63},
  {name:'Tacacá', cal:46.89, carb:3.39, prot:6.96, fat:0.36, unit:'g', calcMode:'per100', taco:true, fiber:0.21, sodium:1349.06, calcium:44.82, iron:0.95, potassium:240.18},
  {name:'Tapioca com manteiga', cal:347.83, carb:63.59, prot:0.09, fat:10.91, unit:'g', calcMode:'per100', taco:true, fiber:0, sodium:157.52, calcium:30.03, iron:0.24, potassium:19.3},
  {name:'Tucupi com pimenta-de-cheiro', cal:27.18, carb:4.74, prot:2.06, fat:0.28, unit:'g', calcMode:'per100', taco:true, fiber:0.23, sodium:5.13, calcium:28.26, iron:1.15, potassium:390.84},
  {name:'Vaca atolada', cal:144.9, carb:10.06, prot:5.12, fat:9.32, unit:'g', calcMode:'per100', taco:true, fiber:2.34, sodium:25.63, calcium:62.66, iron:0.73, potassium:219.81},
  {name:'Vatapá', cal:254.89, carb:9.75, prot:6, fat:23.23, unit:'g', calcMode:'per100', taco:true, fiber:1.7, sodium:879.85, calcium:46.82, iron:1.44, potassium:209.4},
  {name:'Virado à paulista', cal:306.95, carb:14.11, prot:10.18, fat:25.59, unit:'g', calcMode:'per100', taco:true, fiber:2.16, sodium:345.53, calcium:40.71, iron:1.05, potassium:237.26},
  {name:'Yakisoba', cal:112.8, carb:18.25, prot:7.52, fat:2.61, unit:'g', calcMode:'per100', taco:true, fiber:1.06, sodium:793.76, calcium:13.95, iron:0.62, potassium:158.57},
  {name:'Amendoim grão cru', cal:544.05, carb:20.31, prot:27.19, fat:43.85, unit:'g', calcMode:'per100', taco:true, fiber:8.04, sodium:0, calcium:0, iron:2.53, potassium:580.44},
  {name:'Amendoim torrado salgado', cal:605.78, carb:18.7, prot:22.48, fat:53.96, unit:'g', calcMode:'per100', taco:true, fiber:7.76, sodium:375.73, calcium:39.43, iron:1.33, potassium:495.67},
  {name:'Ervilha em vagem', cal:88.09, carb:14.23, prot:7.45, fat:0.47, unit:'g', calcMode:'per100', taco:true, fiber:9.72, sodium:0, calcium:24.44, iron:1.44, potassium:310.98},
  {name:'Ervilha enlatada drenada', cal:73.84, carb:13.44, prot:4.6, fat:0.38, unit:'g', calcMode:'per100', taco:true, fiber:5.08, sodium:372.11, calcium:22.22, iron:1.39, potassium:147.12},
  {name:'Feijão carioca cozido', cal:76.42, carb:13.59, prot:4.78, fat:0.54, unit:'g', calcMode:'per100', taco:true, fiber:8.51, sodium:1.76, calcium:26.59, iron:1.29, potassium:254.62},
  {name:'Feijão carioca cru', cal:329.03, carb:61.22, prot:19.98, fat:1.26, unit:'g', calcMode:'per100', taco:true, fiber:18.42, sodium:0, calcium:122.57, iron:7.99, potassium:1352.46},
  {name:'Feijão fradinho cozido', cal:78.01, carb:13.5, prot:5.09, fat:0.64, unit:'g', calcMode:'per100', taco:true, fiber:7.47, sodium:0.98, calcium:17.45, iron:1.06, potassium:252.98},
  {name:'Feijão fradinho cru', cal:339.16, carb:61.24, prot:20.21, fat:2.37, unit:'g', calcMode:'per100', taco:true, fiber:23.59, sodium:10.31, calcium:77.52, iron:5.13, potassium:1082.74},
  {name:'Feijão jalo cozido', cal:92.74, carb:16.5, prot:6.14, fat:0.51, unit:'g', calcMode:'per100', taco:true, fiber:13.87, sodium:0.52, calcium:29.4, iron:1.92, potassium:347.72},
  {name:'Feijão jalo cru', cal:327.91, carb:61.48, prot:20.1, fat:0.95, unit:'g', calcMode:'per100', taco:true, fiber:30.32, sodium:24.58, calcium:97.97, iron:7.03, potassium:1275.95},
  {name:'Feijão preto cozido', cal:77.03, carb:14.01, prot:4.48, fat:0.54, unit:'g', calcMode:'per100', taco:true, fiber:8.4, sodium:1.85, calcium:29, iron:1.47, potassium:256.37},
  {name:'Feijão preto cru', cal:323.57, carb:58.75, prot:21.34, fat:1.24, unit:'g', calcMode:'per100', taco:true, fiber:21.83, sodium:0, calcium:110.9, iron:6.46, potassium:1415.68},
  {name:'Feijão rajado cozido', cal:84.7, carb:15.27, prot:5.54, fat:0.4, unit:'g', calcMode:'per100', taco:true, fiber:9.32, sodium:0.69, calcium:29.19, iron:1.36, potassium:314.58},
  {name:'Feijão rajado cru', cal:325.84, carb:62.93, prot:17.27, fat:1.17, unit:'g', calcMode:'per100', taco:true, fiber:24.01, sodium:13.65, calcium:111.43, iron:18.58, potassium:1134.54},
  {name:'Feijão rosinha cozido', cal:67.87, carb:11.82, prot:4.54, fat:0.48, unit:'g', calcMode:'per100', taco:true, fiber:4.76, sodium:2.08, calcium:19.24, iron:1.18, potassium:240.57},
  {name:'Feijão rosinha cru', cal:336.96, carb:62.22, prot:20.92, fat:1.33, unit:'g', calcMode:'per100', taco:true, fiber:20.63, sodium:24.11, calcium:67.66, iron:5.32, potassium:1108.66},
  {name:'Feijão roxo cozido', cal:76.89, carb:12.91, prot:5.72, fat:0.54, unit:'g', calcMode:'per100', taco:true, fiber:11.51, sodium:1.46, calcium:22.53, iron:1.41, potassium:268.09},
  {name:'Feijão roxo cru', cal:331.41, carb:59.99, prot:22.17, fat:1.24, unit:'g', calcMode:'per100', taco:true, fiber:33.84, sodium:9.76, calcium:120.46, iron:6.92, potassium:1221.4},
  {name:'Grão-de-bico cru', cal:354.7, carb:57.88, prot:21.23, fat:5.43, unit:'g', calcMode:'per100', taco:true, fiber:12.36, sodium:5.19, calcium:114.36, iron:5.38, potassium:1115.7},
  {name:'Guandu cru', cal:344.13, carb:64, prot:18.96, fat:2.13, unit:'g', calcMode:'per100', taco:true, fiber:21.31, sodium:1.62, calcium:129.34, iron:1.94, potassium:1214.8},
  {name:'Lentilha cozida', cal:92.64, carb:16.3, prot:6.31, fat:0.52, unit:'g', calcMode:'per100', taco:true, fiber:7.86, sodium:1.18, calcium:16.1, iron:1.48, potassium:219.9},
  {name:'Lentilha crua', cal:339.14, carb:62, prot:23.15, fat:0.77, unit:'g', calcMode:'per100', taco:true, fiber:16.94, sodium:0, calcium:53.52, iron:7.05, potassium:886.88},
  {name:'Paçoca amendoim', cal:486.93, carb:52.38, prot:16, fat:26.08, unit:'g', calcMode:'per100', taco:true, fiber:7.32, sodium:166.84, calcium:22.48, iron:1.13, potassium:347.6},
  {name:'Pé-de-moleque amendoim', cal:503.19, carb:54.73, prot:13.16, fat:28.05, unit:'g', calcMode:'per100', taco:true, fiber:3.39, sodium:16.35, calcium:27.11, iron:1.26, potassium:355.41},
  {name:'Soja farinha', cal:403.96, carb:38.44, prot:36.03, fat:14.63, unit:'g', calcMode:'per100', taco:true, fiber:20.18, sodium:5.75, calcium:206.02, iron:13.06, potassium:1922.39},
  {name:'Soja extrato solúvel natural fluido', cal:39.1, carb:4.28, prot:2.38, fat:1.61, unit:'g', calcMode:'per100', taco:true, fiber:0.37, sodium:56.53, calcium:16.52, iron:0.43, potassium:121.04},
  {name:'Soja extrato solúvel pó', cal:458.9, carb:28.48, prot:35.69, fat:26.18, unit:'g', calcMode:'per100', taco:true, fiber:7.31, sodium:83.47, calcium:359.04, iron:7.01, potassium:1606.8},
  {name:'Soja queijo (tofu)', cal:64.49, carb:2.13, prot:6.55, fat:3.95, unit:'g', calcMode:'per100', taco:true, fiber:0.75, sodium:1.21, calcium:80.76, iron:1.43, potassium:181.69},
  {name:'Tremoço cru', cal:381.28, carb:43.79, prot:33.58, fat:10.34, unit:'g', calcMode:'per100', taco:true, fiber:32.31, sodium:3.29, calcium:176.75, iron:2.79, potassium:708.32},
  {name:'Tremoço em conserva', cal:120.64, carb:12.39, prot:11.11, fat:3.78, unit:'g', calcMode:'per100', taco:true, fiber:14.44, sodium:1808.76, calcium:15.54, iron:0.34, potassium:5.2},
  {name:'Amêndoa torrada salgada', cal:580.75, carb:29.55, prot:18.55, fat:47.32, unit:'g', calcMode:'per100', taco:true, fiber:11.64, sodium:278.52, calcium:236.7, iron:3.06, potassium:639.6},
  {name:'Castanha-de-caju torrada salgada', cal:570.17, carb:29.13, prot:18.51, fat:46.28, unit:'g', calcMode:'per100', taco:true, fiber:3.66, sodium:125, calcium:32.59, iron:5.22, potassium:671.46},
  {name:'Castanha-do-Brasil crua', cal:642.96, carb:15.08, prot:14.54, fat:63.46, unit:'g', calcMode:'per100', taco:true, fiber:7.93, sodium:0.65, calcium:146.34, iron:2.31, potassium:650.99},
  {name:'Coco cru', cal:406.49, carb:10.4, prot:3.69, fat:41.98, unit:'g', calcMode:'per100', taco:true, fiber:5.38, sodium:15.32, calcium:6.48, iron:1.76, potassium:354.15},
  {name:'Farinha de mesocarpo de babaçu crua', cal:328.77, carb:79.17, prot:1.41, fat:0.2, unit:'g', calcMode:'per100', taco:true, fiber:17.86, sodium:12.46, calcium:60.95, iron:18.33, potassium:362.07},
  {name:'Gergelim semente', cal:583.55, carb:21.62, prot:21.16, fat:50.43, unit:'g', calcMode:'per100', taco:true, fiber:11.87, sodium:2.58, calcium:825.45, iron:5.45, potassium:546.29},
  {name:'Linhaça semente', cal:495.1, carb:43.31, prot:14.08, fat:32.25, unit:'g', calcMode:'per100', taco:true, fiber:33.5, sodium:8.67, calcium:211.5, iron:4.7, potassium:869.29},
  {name:'Pinhão cozido', cal:174.37, carb:43.92, prot:2.98, fat:0.75, unit:'g', calcMode:'per100', taco:true, fiber:15.6, sodium:0.86, calcium:15.77, iron:0.76, potassium:727.01},
  {name:'Pupunha cozida', cal:218.53, carb:29.57, prot:2.52, fat:12.76, unit:'g', calcMode:'per100', taco:true, fiber:4.25, sodium:0.91, calcium:27.59, iron:0.52, potassium:303.36},
  {name:'Noz crua', cal:620.06, carb:18.36, prot:13.97, fat:59.36, unit:'g', calcMode:'per100', taco:true, fiber:7.25, sodium:4.57, calcium:105.31, iron:2.04, potassium:533.26},
];

// ---- localStorage com fallback seguro (namespace independente da versão desktop) ----
function lsGet(key){ try{ return localStorage.getItem(key); }catch(e){ return null; } }
function lsSet(key,val){ try{ localStorage.setItem(key,val); }catch(e){} }

let _logoMemory = '';

let foods = JSON.parse(lsGet('td_mobile_foods') || 'null') || JSON.parse(JSON.stringify(DEFAULT_FOODS));

function syncDefaultFoods(){
  const byName = Object.fromEntries(foods.map((f,i)=>[f.name,i]));
  let changed = false;
  DEFAULT_FOODS.forEach(df=>{
    if(byName[df.name] === undefined){
      foods.push({...df}); changed = true;
    } else if(df.wpu && !foods[byName[df.name]].wpu){
      Object.assign(foods[byName[df.name]], {wpu:df.wpu, calcMode:df.calcMode, cal:df.cal, carb:df.carb, prot:df.prot, fat:df.fat});
      changed = true;
    }
  });
  if(changed) saveFoods();
}
syncDefaultFoods();
let meals = [];
let mealIdCtr = 0;
let compCtr = 0;
let ergoCtr = 0;
let chart = null;

// ===================== ÁGUA & REFEIÇÕES LIVRES =====================
const DAY_ORDER = [1,2,3,4,5,6,0]; // Seg..Dom (ordem de exibição dos chips)
const DAY_ABBR  = ['Dom','Seg','Ter','Qua','Qui','Sex','Sáb'];
const DAY_FULL  = ['Domingo','Segunda-feira','Terça-feira','Quarta-feira','Quinta-feira','Sexta-feira','Sábado'];
let freeDays = [];

function updateWater(){
  const v = parseFloat(document.getElementById('sWater').value);
  document.getElementById('waterLiters').textContent = (v>0) ? '('+(v/1000).toFixed(1)+' L)' : '';
}
function toggleFreeDay(day){
  const idx = freeDays.indexOf(day);
  if(idx>-1) freeDays.splice(idx,1); else freeDays.push(day);
  renderFreeDaysUI();
}
function renderFreeDaysUI(){
  document.querySelectorAll('.day-chip').forEach(btn=>{
    btn.classList.toggle('active', freeDays.includes(parseInt(btn.dataset.day)));
  });
  const c = document.getElementById('freeDaysCount');
  c.textContent = freeDays.length ? `(${freeDays.length})` : '';
}

// ===================== ALUNOS SALVOS (lista, pagamento, WhatsApp, histórico) =====================
let students = JSON.parse(lsGet('td_mobile_students') || '[]');
let currentStudentId = null;
let studentFilter = '';
const PAY_LABEL = {em_dia:'Em dia', a_vencer:'A vencer', inadimplente:'Inadimplente'};
const PAY_ORDER = {inadimplente:0, a_vencer:1, em_dia:2};

function saveStudentsToStorage(){ lsSet('td_mobile_students', JSON.stringify(students)); }
function genId(){ return 'std_'+Date.now().toString(36)+Math.random().toString(36).slice(2,7); }

function updateStudentStatusLine(){
  const el = document.getElementById('studentStatusLine');
  if(!el) return;
  if(!currentStudentId){
    el.innerHTML = '🆕 Novo atendimento (não salvo)';
  } else {
    const st = students.find(s=>s.id===currentStudentId);
    el.innerHTML = st ? `✏️ Editando: <b>${st.name}</b>` : '🆕 Novo atendimento (não salvo)';
  }
}

function newAtendimento(){
  clearAll();
  switchTab('aluno');
}

function saveStudent(){
  const name = document.getElementById('sName').value.trim();
  if(!name){ alert('Informe o nome do aluno antes de salvar.'); return; }

  const compRows = [], ergoRows = [];
  document.querySelectorAll('#compBody .entry-row').forEach(row=>{
    const ins = row.querySelectorAll('input');
    compRows.push([ins[0]?.value||'', ins[1]?.value||'', ins[2]?.value||'']);
  });
  document.querySelectorAll('#ergoBody .entry-row').forEach(row=>{
    const ins = row.querySelectorAll('input');
    ergoRows.push([ins[0]?.value||'', ins[1]?.value||'', ins[2]?.value||'']);
  });

  const record = {
    id: currentStudentId || genId(),
    name,
    age: document.getElementById('sAge').value,
    weight: document.getElementById('sWeight').value,
    height: document.getElementById('sHeight').value,
    gender: document.getElementById('sGender').value,
    activity: document.getElementById('sActivity').value,
    phone: document.getElementById('sPhone').value.trim(),
    payStatus: document.getElementById('sPayStatus').value,
    dueDate: document.getElementById('sDueDate').value,
    meals: JSON.parse(JSON.stringify(meals)),
    compounds: compRows,
    ergogenics: ergoRows,
    observations: document.getElementById('observations').value,
    water: document.getElementById('sWater').value,
    freeDays: [...freeDays],
    pdfHistory: [],
    updatedAt: Date.now()
  };

  const idx = students.findIndex(s=>s.id===record.id);
  if(idx>-1){ record.pdfHistory = students[idx].pdfHistory || []; students[idx] = record; }
  else students.push(record);

  currentStudentId = record.id;
  saveStudentsToStorage();
  updateStudentStatusLine();
  renderStudentsList();
  alert('Aluno salvo com sucesso!');
}

function openStudent(id){
  const st = students.find(s=>s.id===id);
  if(!st) return;

  document.getElementById('sName').value     = st.name || '';
  document.getElementById('sAge').value      = st.age || '';
  document.getElementById('sWeight').value   = st.weight || '';
  document.getElementById('sHeight').value   = st.height || '';
  document.getElementById('sGender').value   = st.gender || 'male';
  document.getElementById('sActivity').value = st.activity || '1.2';
  document.getElementById('sPhone').value    = st.phone || '';
  document.getElementById('sPayStatus').value= st.payStatus || 'em_dia';
  document.getElementById('sDueDate').value  = st.dueDate || '';
  calcTMB();

  meals = JSON.parse(JSON.stringify(st.meals || []));
  mealIdCtr = meals.reduce((max,m)=>Math.max(max,m.id||0),0);
  renderMeals();

  const compBody = document.getElementById('compBody');
  compBody.innerHTML = '<div id="compEmpty" class="empty-hint">Nenhum manipulado adicionado</div>';
  compCtr = 0;
  (st.compounds||[]).forEach(r=>{
    addCompound();
    const rows = compBody.querySelectorAll('.entry-row');
    const ins  = rows[rows.length-1].querySelectorAll('input');
    ins[0].value=r[0]||''; ins[1].value=r[1]||''; ins[2].value=r[2]||'';
  });

  const ergoBody = document.getElementById('ergoBody');
  ergoBody.innerHTML = '<div id="ergoEmpty" class="empty-hint">Nenhum ergogênico adicionado</div>';
  ergoCtr = 0;
  (st.ergogenics||[]).forEach(r=>{
    addErgogenic();
    const rows = ergoBody.querySelectorAll('.entry-row');
    const ins  = rows[rows.length-1].querySelectorAll('input');
    ins[0].value=r[0]||''; ins[1].value=r[1]||''; ins[2].value=r[2]||'';
  });

  document.getElementById('observations').value = st.observations || '';
  document.getElementById('sWater').value = st.water || '';
  updateWater();
  freeDays = [...(st.freeDays || [])];
  renderFreeDaysUI();

  currentStudentId = st.id;
  updateStudentStatusLine();
  switchTab('aluno');
}

function deleteStudent(id){
  const st = students.find(s=>s.id===id);
  if(!st) return;
  if(!confirm(`Excluir o aluno "${st.name}"?\n\nIsso apaga todos os dados salvos dele (dieta, contato, histórico de PDFs).`)) return;
  students = students.filter(s=>s.id!==id);
  saveStudentsToStorage();
  if(currentStudentId===id) newAtendimento();
  renderStudentsList();
}

function computeDueInfo(dueDate){
  if(!dueDate) return '';
  const due = new Date(dueDate+'T00:00:00');
  const today = new Date(); today.setHours(0,0,0,0);
  const diff = Math.round((due-today)/86400000);
  if(diff===0) return 'Vence hoje';
  if(diff>0) return `Vence em ${diff}d`;
  return `Venceu há ${Math.abs(diff)}d`;
}

function setStudentFilter(v){ studentFilter = v.toLowerCase(); renderStudentsList(); }

function renderStudentsList(){
  const el = document.getElementById('studentsList');
  if(!el) return;
  const filtered = students
    .filter(s => !studentFilter || s.name.toLowerCase().includes(studentFilter) || (s.phone||'').toLowerCase().includes(studentFilter))
    .sort((a,b)=> (PAY_ORDER[a.payStatus]??2) - (PAY_ORDER[b.payStatus]??2) || a.name.localeCompare(b.name));

  if(!filtered.length){
    el.innerHTML = `<div class="empty-hint">${students.length ? 'Nenhum aluno encontrado.' : 'Nenhum aluno salvo ainda. Toque em "+ Novo Atendimento" para começar.'}</div>`;
    return;
  }

  el.innerHTML = filtered.map(s=>{
    const dueInfo   = computeDueInfo(s.dueDate);
    const histCount = (s.pdfHistory||[]).length;
    const histHTML  = histCount ? `
      <details class="pdf-history">
        <summary>📄 Histórico (${histCount})</summary>
        <ul>${s.pdfHistory.slice().reverse().map(h=>`<li>${h.date}</li>`).join('')}</ul>
      </details>` : '';
    const fbHTML = s.nextFeedback ? `
      <div class="feedback-chip">
        <span>📅 Feedback: ${new Date(s.nextFeedback.date).toLocaleString('pt-BR',{day:'2-digit',month:'2-digit',hour:'2-digit',minute:'2-digit'})}</span>
        <span><a href="${s.nextFeedback.htmlLink}" target="_blank" rel="noopener">ver</a> · <button onclick="cancelFeedbackEvent('${s.id}')" class="link-btn">cancelar</button></span>
      </div>` : '';
    return `<div class="student-card">
      <div class="student-card-hdr">
        <div>
          <div class="student-card-name">${s.name}</div>
          ${s.phone ? `<div class="student-card-phone">${s.phone}</div>` : ''}
        </div>
        <span class="pay-badge pay-${s.payStatus||'em_dia'}">${PAY_LABEL[s.payStatus]||'Em dia'}</span>
      </div>
      ${dueInfo ? `<div class="student-card-due">🗓 ${dueInfo}</div>` : ''}
      <div class="student-card-actions">
        <button onclick="openStudent('${s.id}')" class="btn btn-outline">Abrir</button>
        ${s.phone ? `<button onclick="sendCobranca('${s.id}')" class="btn btn-whatsapp">💬 Cobrança</button>` : ''}
        <button onclick="openFeedbackModal('${s.id}')" class="btn btn-blue">📅 Feedback</button>
        <button onclick="deleteStudent('${s.id}')" class="btn btn-red btn-icon-only">✕</button>
      </div>
      ${fbHTML}
      ${histHTML}
    </div>`;
  }).join('');
}

function formatPhoneForWa(phone){
  let digits = (phone||'').replace(/\D/g,'');
  if(!digits) return '';
  if(digits.length<=11) digits = '55'+digits; // assume Brasil quando não há código de país
  return digits;
}

function buildCobrancaMessage(st){
  const firstName = (st.name||'').trim().split(' ')[0] || '';
  const dueInfo = computeDueInfo(st.dueDate);
  let situacao;
  if(st.payStatus==='inadimplente'){
    situacao = dueInfo ? `sua mensalidade da consultoria está em atraso (${dueInfo.toLowerCase()})` : 'sua mensalidade da consultoria está em atraso';
  } else if(dueInfo === 'Vence hoje'){
    situacao = 'sua mensalidade da consultoria vence hoje';
  } else if(dueInfo){
    situacao = `sua mensalidade da consultoria ${dueInfo.toLowerCase()}`;
  } else {
    situacao = 'sua mensalidade da consultoria está próxima do vencimento';
  }
  return `Fala ${firstName}, tudo bem? Passando para avisar que ${situacao}. Qualquer dúvida, me chama por aqui! 💪`;
}

function sendCobranca(id){
  const st = students.find(s=>s.id===id);
  if(!st) return;
  const digits = formatPhoneForWa(st.phone);
  if(!digits){ alert('Este aluno não tem telefone cadastrado.'); return; }
  const msg = buildCobrancaMessage(st);
  window.open(`https://wa.me/${digits}?text=${encodeURIComponent(msg)}`, '_blank');
}

// ===================== CONTATO DO TREINADOR (aparece no rodapé do PDF) =====================
let coachContact = lsGet('td_mobile_coach_contact') || '';
function saveCoachContact(){
  const v = document.getElementById('coachContact').value.trim();
  coachContact = v;
  lsSet('td_mobile_coach_contact', v);
  document.getElementById('coachContactStatus').textContent = v ? 'salvo ✓' : 'não configurado';
  alert('Contato salvo!');
}

// ===================== GOOGLE AGENDA (OAuth client-side, sem backend) =====================
const GCAL_SCOPE = 'https://www.googleapis.com/auth/calendar.events';
let gcalClientId    = lsGet('td_mobile_gcal_client_id') || '';
let gcalTokenClient = null;
let gcalAccessToken = null;
let gcalTokenExpiry = 0;
let feedbackModalStudentId = null;

function updateGcalStatus(text){
  const el = document.getElementById('gcalStatusText');
  if(el) el.textContent = text;
}

function initGcalTokenClient(){
  if(!gcalClientId || typeof google==='undefined' || !google.accounts || !google.accounts.oauth2) return false;
  gcalTokenClient = google.accounts.oauth2.initTokenClient({
    client_id: gcalClientId,
    scope: GCAL_SCOPE,
    callback: ()=>{} // sobrescrito a cada chamada em ensureGcalToken()
  });
  return true;
}

function saveGcalClientId(){
  const v = document.getElementById('gcalClientId').value.trim();
  if(!v){ alert('Cole o Client ID gerado no Google Cloud Console.'); return; }
  gcalClientId = v;
  lsSet('td_mobile_gcal_client_id', v);
  gcalTokenClient = null; gcalAccessToken = null; gcalTokenExpiry = 0;
  const ok = initGcalTokenClient();
  updateGcalStatus(ok ? 'desconectado (toque em Conectar)' : 'Client ID salvo — aguardando biblioteca do Google carregar');
  alert('Client ID salvo! Agora toque em "Conectar Google Agenda".');
}

function connectGoogleCalendar(){
  if(!gcalClientId){ alert('Primeiro cole e salve o Client ID do Google Cloud Console.'); return; }
  if(!gcalTokenClient && !initGcalTokenClient()){
    alert('A biblioteca do Google ainda não carregou (ou o app foi aberto como arquivo local — o login do Google só funciona servido via http/https). Verifique sua conexão e tente novamente.');
    return;
  }
  gcalTokenClient.callback = (resp)=>{
    if(resp.error){ updateGcalStatus('erro: '+resp.error); alert('Falha ao conectar: '+resp.error); return; }
    gcalAccessToken = resp.access_token;
    gcalTokenExpiry = Date.now() + (resp.expires_in*1000);
    updateGcalStatus('conectado ✓');
  };
  gcalTokenClient.requestAccessToken({prompt:'consent'});
}

function ensureGcalToken(cb){
  if(gcalAccessToken && Date.now() < gcalTokenExpiry - 5000){ cb(); return; }
  if(!gcalTokenClient && !initGcalTokenClient()){
    alert('Configure e conecte sua Google Agenda primeiro (aba Alunos → Google Agenda).');
    return;
  }
  gcalTokenClient.callback = (resp)=>{
    if(resp.error){ alert('Falha ao autenticar com o Google: '+resp.error); return; }
    gcalAccessToken = resp.access_token;
    gcalTokenExpiry = Date.now() + (resp.expires_in*1000);
    updateGcalStatus('conectado ✓');
    cb();
  };
  gcalTokenClient.requestAccessToken({prompt:''});
}

function openFeedbackModal(studentId){
  const st = students.find(s=>s.id===studentId);
  if(!st) return;
  feedbackModalStudentId = studentId;
  document.getElementById('feedbackModalStudentName').textContent = st.name;
  document.getElementById('feedbackModalStatus').textContent = '';
  const d = new Date(Date.now()+24*3600*1000);
  document.getElementById('fbDate').value = d.toISOString().slice(0,10);
  document.getElementById('fbTime').value = '10:00';
  document.getElementById('fbDuration').value = '30';
  document.getElementById('modalFeedback').classList.remove('hidden');
  document.body.classList.add('modal-open');
}
function closeFeedbackModal(){
  document.getElementById('modalFeedback').classList.add('hidden');
  document.body.classList.remove('modal-open');
  feedbackModalStudentId = null;
}

function createFeedbackEvent(){
  const st = students.find(s=>s.id===feedbackModalStudentId);
  if(!st) return;
  const date = document.getElementById('fbDate').value;
  const time = document.getElementById('fbTime').value;
  if(!date || !time){ alert('Escolha data e horário.'); return; }
  const dur = parseInt(document.getElementById('fbDuration').value);
  const statusEl = document.getElementById('feedbackModalStatus');
  const btn = document.getElementById('fbCreateBtn');

  ensureGcalToken(()=>{
    const start = new Date(`${date}T${time}:00`);
    const end = new Date(start.getTime() + dur*60000);
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;

    statusEl.innerHTML = '<span style="color:#00aaff;">⏳ Criando evento...</span>';
    btn.disabled = true;

    fetch('https://www.googleapis.com/calendar/v3/calendars/primary/events', {
      method: 'POST',
      headers: { 'Authorization': 'Bearer '+gcalAccessToken, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        summary: `Feedback - ${st.name}`,
        description: `Feedback de acompanhamento — TEAM DECA${st.phone ? '\nTelefone: '+st.phone : ''}`,
        start: { dateTime: start.toISOString(), timeZone: tz },
        end:   { dateTime: end.toISOString(), timeZone: tz }
      })
    })
    .then(r => r.ok ? r.json() : r.json().then(e=>Promise.reject(e)))
    .then(ev => {
      st.nextFeedback = { date: start.toISOString(), eventId: ev.id, htmlLink: ev.htmlLink };
      saveStudentsToStorage();
      renderStudentsList();
      statusEl.innerHTML = '<span style="color:#00cc66;">✅ Evento criado na sua Google Agenda!</span>';
      setTimeout(closeFeedbackModal, 1200);
    })
    .catch(err => {
      console.error('Erro Google Calendar:', err);
      statusEl.innerHTML = '<span style="color:#ff6b6b;">❌ Erro: '+(err?.error?.message || 'falha ao criar evento')+'</span>';
    })
    .finally(() => { btn.disabled = false; });
  });
}

function cancelFeedbackEvent(id){
  const st = students.find(s=>s.id===id);
  if(!st || !st.nextFeedback) return;
  if(!confirm('Cancelar este feedback agendado?\n\nIsso também remove o evento da sua Google Agenda.')) return;
  ensureGcalToken(()=>{
    fetch(`https://www.googleapis.com/calendar/v3/calendars/primary/events/${st.nextFeedback.eventId}`, {
      method: 'DELETE',
      headers: { 'Authorization': 'Bearer '+gcalAccessToken }
    })
    .then(r => { if(!r.ok && r.status!==410) return Promise.reject(r); })
    .then(() => {
      st.nextFeedback = null;
      saveStudentsToStorage();
      renderStudentsList();
    })
    .catch(err => { console.error('Erro ao cancelar evento:', err); alert('Não foi possível cancelar o evento na Google Agenda. Tente novamente.'); });
  });
}

function saveFoods(){ lsSet('td_mobile_foods', JSON.stringify(foods)); }

// ===================== TABS =====================
function switchTab(tab){
  document.querySelectorAll('.tab-btn').forEach(b=>b.classList.toggle('active', b.dataset.tab===tab));
  document.querySelectorAll('.tab-pane').forEach(p=>p.classList.toggle('active', p.id==='tab-'+tab));
  window.scrollTo({top:0, behavior:'smooth'});
}

// ===================== LOGO =====================
function uploadLogo(input){
  const f = input.files[0];
  if(!f) return;
  const r = new FileReader();
  r.onload = e => { _logoMemory = e.target.result; lsSet('td_mobile_logo', e.target.result); applyLogo(e.target.result); };
  r.readAsDataURL(f);
}
function applyLogo(src){
  const img = document.getElementById('logoPreview');
  if(img){ img.src = src; img.style.display='none'; } // usado apenas no PDF
}
(()=>{ const s = lsGet('td_mobile_logo'); if(s){ _logoMemory = s; applyLogo(s); } })();

// ===================== CLEAR =====================
function confirmClear(){
  if(!confirm('Limpar todos os campos do atendimento atual?\n\n(Alimentos cadastrados e logo não serão apagados)')) return;
  clearAll();
}
function clearAll(){
  ['sName','sAge','sWeight','sHeight'].forEach(id => document.getElementById(id).value='');
  document.getElementById('sGender').value='male';
  document.getElementById('sActivity').value='1.2';
  document.getElementById('tmbResult').textContent='—';
  document.getElementById('getResult').textContent='—';
  meals=[]; mealIdCtr=0;
  renderMeals();
  document.getElementById('compBody').innerHTML='<div id="compEmpty" class="empty-hint">Nenhum manipulado adicionado</div>';
  document.getElementById('ergoBody').innerHTML='<div id="ergoEmpty" class="empty-hint">Nenhum ergogênico adicionado</div>';
  document.getElementById('observations').value='';
  compCtr=0; ergoCtr=0;
  document.getElementById('sWater').value='';
  updateWater();
  freeDays=[];
  renderFreeDaysUI();
  document.getElementById('sPhone').value='';
  document.getElementById('sPayStatus').value='em_dia';
  document.getElementById('sDueDate').value='';
  currentStudentId=null;
  updateStudentStatusLine();
}

// ===================== TMB =====================
function calcTMB(){
  const age    = parseFloat(document.getElementById('sAge').value);
  const weight = parseFloat(document.getElementById('sWeight').value);
  const height = parseFloat(document.getElementById('sHeight').value);
  const gender = document.getElementById('sGender').value;
  const act    = parseFloat(document.getElementById('sActivity').value);
  if(!age||!weight||!height){
    document.getElementById('tmbResult').textContent='—';
    document.getElementById('getResult').textContent='—';
    return;
  }
  const tmb = gender==='male'
    ? 88.362 + (13.397*weight) + (4.799*height) - (5.677*age)
    : 447.593 + (9.247*weight) + (3.098*height) - (4.330*age);
  document.getElementById('tmbResult').textContent = Math.round(tmb).toLocaleString('pt-BR');
  document.getElementById('getResult').textContent  = Math.round(tmb*act).toLocaleString('pt-BR');
}

// ===================== FOOD MODAL =====================
function openModal(){
  document.getElementById('modalFood').classList.remove('hidden');
  document.body.classList.add('modal-open');
  renderFoodBank();
}
function closeModal(){
  document.getElementById('modalFood').classList.add('hidden');
  document.body.classList.remove('modal-open');
  ['fName','fCal','fCarb','fProt','fFat','fWpu','fFiber','fSodium','fCalcium','fIron','fPotassium'].forEach(id=>{ const el=document.getElementById(id); if(el) el.value=''; });
  document.getElementById('fUnit').value='g';
  document.getElementById('fCalcMode').value='per100';
  updateCalcHint();
}
function updateCalcHint(){
  const mode = document.getElementById('fCalcMode').value;
  const hint = document.getElementById('calcHint');
  const lbl  = document.getElementById('fCalLbl');
  const wpuW = document.getElementById('wpuWrap');
  if(mode==='wpu'){
    wpuW.style.display='';
    hint.innerHTML='Macros por <strong>100g</strong>. Informe o <strong>peso médio por unidade</strong> acima. Na dieta, informe o nº de unidades — o app calcula automaticamente.';
    lbl.textContent='Calorias (por 100g)';
  } else if(mode==='perUnit'){
    wpuW.style.display='none';
    hint.innerHTML='Macros referentes a <strong>1 unidade</strong> do alimento. Na dieta, informe a <strong>quantidade de unidades</strong>.';
    lbl.textContent='Calorias (por 1 unidade)';
  } else {
    wpuW.style.display='none';
    hint.innerHTML='Macros referentes a <strong>100g / 100ml</strong>. Na dieta, informe a quantidade em gramas ou ml.';
    lbl.textContent='Calorias (por 100g/ml)';
  }
}
function saveFood(){
  const name = document.getElementById('fName').value.trim();
  const cal  = parseFloat(document.getElementById('fCal').value)||0;
  if(!name){ alert('Informe o nome do alimento.'); return; }
  const calcMode = document.getElementById('fCalcMode').value||'per100';
  const wpu = calcMode==='wpu' ? (parseFloat(document.getElementById('fWpu').value)||0) : undefined;
  const entry = {name, cal,
    carb:     parseFloat(document.getElementById('fCarb').value)||0,
    prot:     parseFloat(document.getElementById('fProt').value)||0,
    fat:      parseFloat(document.getElementById('fFat').value)||0,
    unit:     document.getElementById('fUnit').value||'g',
    calcMode};
  if(wpu) entry.wpu = wpu;
  const fiber     = parseFloat(document.getElementById('fFiber').value);
  const sodium    = parseFloat(document.getElementById('fSodium').value);
  const calcium   = parseFloat(document.getElementById('fCalcium').value);
  const iron      = parseFloat(document.getElementById('fIron').value);
  const potassium = parseFloat(document.getElementById('fPotassium').value);
  if(!isNaN(fiber))     entry.fiber = fiber;
  if(!isNaN(sodium))    entry.sodium = sodium;
  if(!isNaN(calcium))   entry.calcium = calcium;
  if(!isNaN(iron))      entry.iron = iron;
  if(!isNaN(potassium)) entry.potassium = potassium;
  foods.push(entry);
  saveFoods(); renderFoodBank(); renderMeals();
  ['fName','fCal','fCarb','fProt','fFat','fWpu','fFiber','fSodium','fCalcium','fIron','fPotassium'].forEach(id=>{ const el=document.getElementById(id); if(el) el.value=''; });
  document.getElementById('fUnit').value='g';
  document.getElementById('fCalcMode').value='per100';
  updateCalcHint();
}
function deleteFood(i){
  if(!confirm(`Remover "${foods[i].name}"?`)) return;
  foods.splice(i,1); saveFoods(); renderFoodBank(); renderMeals();
}

let foodFilter = '';
function setFoodFilter(v){ foodFilter=v.toLowerCase(); renderFoodBank(); }

function renderFoodBank(){
  const filtered = foods.map((f,i)=>({f,i}))
    .filter(({f})=> !foodFilter || f.name.toLowerCase().includes(foodFilter));

  const tacoTag  = `<span class="tag tag-taco">TACO</span>`;
  const unitTag  = f => `<span class="tag tag-unit">${f.unit||'g'}</span>`;
  const modeTag = f => {
    if(f.wpu || f.calcMode==='wpu')
      return `<span class="tag tag-mode">por ${f.unit||'un'} · ${f.wpu}g</span>`;
    if(f.calcMode==='perUnit')
      return `<span class="tag tag-mode">por un.</span>`;
    return '';
  };

  document.getElementById('foodBankList').innerHTML = !filtered.length
    ? '<div class="empty-hint">Nenhum alimento encontrado.</div>'
    : filtered.map(({f,i})=>`
      <div class="food-bank-row">
        <div class="fb-info">
          <span class="fb-name">${f.name}</span>${f.taco?tacoTag:''}${unitTag(f)}${modeTag(f)}
          <div class="fb-macros">${f.cal} kcal | C:${f.carb}g P:${f.prot}g G:${f.fat}g</div>
        </div>
        <button onclick="deleteFood(${i})" class="btn btn-red btn-icon-only">✕</button>
      </div>`).join('');
}

// ===================== MEALS =====================
function foodOptions(sel){
  return foods.map((f,i)=>{
    let tag;
    if(f.wpu || f.calcMode==='wpu') tag=`por ${f.unit||'un'} (${f.wpu}g)`;
    else if(f.calcMode==='perUnit') tag=`por ${f.unit||'un'}`;
    else tag=`por 100${f.unit==='ml'?'ml':'g'}`;
    return `<option value="${i}"${i===sel?' selected':''}>${f.name} [${tag}]</option>`;
  }).join('');
}
function addMeal(){
  mealIdCtr++;
  meals.push({id:mealIdCtr, name:`Refeição ${mealIdCtr}`, time:'', notes:'', items:[]});
  renderMeals();
}
function removeMeal(id){ meals=meals.filter(m=>m.id!==id); renderMeals(); }
function setMealName(id,v){ const m=meals.find(m=>m.id===id); if(m) m.name=v; }
function setMealTime(id,v){ const m=meals.find(m=>m.id===id); if(m) m.time=v; }
function setMealNotes(id,v){ const m=meals.find(m=>m.id===id); if(m) m.notes=v; }
function addItem(mealId){ const m=meals.find(m=>m.id===mealId); if(m){ m.items.push({fi:0,qty:100}); renderMeals(); } }
function removeItem(mealId,idx){ const m=meals.find(m=>m.id===mealId); if(m){ m.items.splice(idx,1); renderMeals(); } }
function setItem(mealId,idx,field,val){
  const m=meals.find(m=>m.id===mealId); if(!m) return;
  m.items[idx][field] = field==='fi' ? parseInt(val) : (parseFloat(val)||0);
  renderMeals();
}
function setItemFood(mealId,idx,val){
  const m=meals.find(m=>m.id===mealId); if(!m) return;
  const fi = parseInt(val);
  m.items[idx].fi = fi;
  const f = foods[fi];
  if(f) m.items[idx].qty = (f.calcMode==='perUnit'||f.calcMode==='wpu'||f.wpu) ? 1 : 100;
  renderMeals();
}
const EMPTY_TOTALS = {cal:0,carb:0,prot:0,fat:0,fiber:0,sodium:0,calcium:0,iron:0,potassium:0};
function calcItem(item){
  const f=foods[item.fi]; if(!f) return {...EMPTY_TOTALS};
  let mult;
  if(f.wpu || f.calcMode==='wpu') mult = (item.qty * (f.wpu||0)) / 100;
  else if(f.calcMode==='perUnit') mult = item.qty;
  else mult = item.qty/100;
  return {
    cal:f.cal*mult, carb:f.carb*mult, prot:f.prot*mult, fat:f.fat*mult,
    fiber:(f.fiber||0)*mult, sodium:(f.sodium||0)*mult, calcium:(f.calcium||0)*mult,
    iron:(f.iron||0)*mult, potassium:(f.potassium||0)*mult
  };
}
function mealTotals(meal){ return meal.items.reduce((a,it)=>{ const c=calcItem(it); Object.keys(EMPTY_TOTALS).forEach(k=>a[k]+=c[k]); return a; },{...EMPTY_TOTALS}); }
function allTotals(){ return meals.reduce((a,m)=>{ const t=mealTotals(m); Object.keys(EMPTY_TOTALS).forEach(k=>a[k]+=t[k]); return a; },{...EMPTY_TOTALS}); }
function f1(n){ return (n||0).toFixed(1); }

// ===================== SUBSTITUIÇÕES =====================
function macroDist(a, b){
  const ta=(a.prot*4+a.carb*4+a.fat*9)||a.cal||1;
  const tb=(b.prot*4+b.carb*4+b.fat*9)||b.cal||1;
  const dp=a.prot*4/ta - b.prot*4/tb;
  const dc=a.carb*4/ta - b.carb*4/tb;
  const df=a.fat*9/ta  - b.fat*9/tb;
  return Math.sqrt(dp*dp + dc*dc + df*df);
}
function findTacoSubs(food){
  return foods
    .filter(f=>f.taco && f.name!==food.name && f.cal>0)
    .map(f=>({f, d:macroDist(food,f)}))
    .sort((a,b)=>a.d-b.d)
    .slice(0,2)
    .map(x=>x.f);
}
function equivQtyStr(origFood, origQty, sub){
  const cv = calcItem({fi: foods.indexOf(origFood), qty: origQty});
  const targetCal = cv.cal;
  if(!sub.cal || !targetCal) return '—';
  let qty, unit;
  if(sub.wpu || sub.calcMode==='wpu'){
    qty = Math.round((targetCal / (sub.cal * sub.wpu / 100)) * 10)/10;
    unit = sub.unit||'un';
  } else if(sub.calcMode==='perUnit'){
    qty = Math.round((targetCal / sub.cal) * 10)/10;
    unit = sub.unit||'un';
  } else {
    qty = Math.round(targetCal / (sub.cal/100));
    unit = 'g';
  }
  return qty+' '+unit;
}
function renderSubstitutions(){
  const sec = document.getElementById('substSection');
  if(!meals.length){ sec.classList.add('hidden'); return; }
  const seen = new Map();
  meals.forEach(m=>m.items.forEach(it=>{
    if(!seen.has(it.fi)) seen.set(it.fi, it.qty);
  }));
  const rows = [];
  seen.forEach((qty,fi)=>{
    const food=foods[fi]; if(!food) return;
    const subs=findTacoSubs(food);
    if(!subs.length) return;
    rows.push({food,qty,subs});
  });
  if(!rows.length){ sec.classList.add('hidden'); return; }
  sec.classList.remove('hidden');
  const isUnit = f=>(f.wpu||f.calcMode==='wpu'||f.calcMode==='perUnit');
  const qtyStr = (f,q)=> isUnit(f) ? q+' '+(f.unit||'un') : q+'g';
  document.getElementById('substList').innerHTML = rows.map(r=>`
    <div class="subst-card">
      <div class="subst-main">${r.food.name} — <span class="qty">${qtyStr(r.food,r.qty)}</span></div>
      ${r.subs[0] ? `<div class="subst-row"><span>${r.subs[0].name}</span><span class="eq">${equivQtyStr(r.food,r.qty,r.subs[0])}</span></div>` : ''}
      ${r.subs[1] ? `<div class="subst-row"><span>${r.subs[1].name}</span><span class="eq">${equivQtyStr(r.food,r.qty,r.subs[1])}</span></div>` : ''}
    </div>`).join('');
}

function renderMeals(){
  const c = document.getElementById('mealsContainer');
  if(!meals.length){
    c.innerHTML='<div class="empty-hint">Toque em "+ Refeição" para iniciar o planejamento alimentar...</div>';
    document.getElementById('macroSummary').classList.add('hidden');
    document.getElementById('microSummary').classList.add('hidden');
    if(chart){ chart.destroy(); chart=null; }
    renderSubstitutions();
    return;
  }
  c.innerHTML = meals.map(meal=>{
    const mt = mealTotals(meal);
    const itemsHTML = !meal.items.length
      ? '<div class="empty-hint" style="padding:14px 4px;">Nenhum alimento adicionado.</div>'
      : meal.items.map((item,ii)=>{
          const cv=calcItem(item);
          const fu = foods[item.fi];
          const funit = fu ? (fu.unit||'g') : 'g';
          return `<div class="food-item-card">
            <div class="food-item-top">
              <select onchange="setItemFood(${meal.id},${ii},this.value)">
                ${foodOptions(item.fi)}
              </select>
              <button onclick="removeItem(${meal.id},${ii})" class="btn btn-red btn-icon-only">✕</button>
            </div>
            <div class="food-item-qty-row">
              <input type="number" inputmode="decimal" value="${item.qty}" min="0" step="1"
                onchange="setItem(${meal.id},${ii},'qty',this.value)">
              <span class="unit-tag">${funit}</span>
            </div>
            <div class="food-item-macros">
              <span><b>${f1(cv.cal)}</b> kcal</span>
              <span>C: <b>${f1(cv.carb)}g</b></span>
              <span>P: <b>${f1(cv.prot)}g</b></span>
              <span>G: <b>${f1(cv.fat)}g</b></span>
            </div>
          </div>`;
        }).join('');
    return `<div class="meal-card">
      <div class="meal-card-hdr">
        <input class="meal-name-inp" type="text" value="${meal.name}" onchange="setMealName(${meal.id},this.value)" placeholder="Nome da refeição...">
        <input class="meal-time-inp" type="time" value="${meal.time||''}" onchange="setMealTime(${meal.id},this.value)">
        <div class="meal-actions">
          <button onclick="addItem(${meal.id})" class="btn btn-outline" style="padding:8px 12px;font-size:12px;">+ Alimento</button>
          <button onclick="removeMeal(${meal.id})" class="btn btn-red btn-icon-only">✕</button>
        </div>
      </div>
      ${itemsHTML}
      <div class="meal-total-bar"><span>Total: ${f1(mt.cal)} kcal | C: ${f1(mt.carb)}g | P: ${f1(mt.prot)}g | G: ${f1(mt.fat)}g</span></div>
      <textarea class="meal-notes" placeholder="Observação / sugestão para esta refeição..." onchange="setMealNotes(${meal.id},this.value)">${meal.notes||''}</textarea>
    </div>`;
  }).join('');

  document.getElementById('macroSummary').classList.remove('hidden');
  document.getElementById('microSummary').classList.remove('hidden');
  const tot = allTotals();
  document.getElementById('totalCal').textContent  = f1(tot.cal);
  document.getElementById('totalCarb').textContent = f1(tot.carb)+'g';
  document.getElementById('totalProt').textContent = f1(tot.prot)+'g';
  document.getElementById('totalFat').textContent  = f1(tot.fat)+'g';
  document.getElementById('totalFiber').textContent     = f1(tot.fiber)+'g';
  document.getElementById('totalSodium').textContent    = f1(tot.sodium)+'mg';
  document.getElementById('totalCalcium').textContent   = f1(tot.calcium)+'mg';
  document.getElementById('totalIron').textContent      = f1(tot.iron)+'mg';
  document.getElementById('totalPotassium').textContent = f1(tot.potassium)+'mg';
  updateChart(tot);
  renderSubstitutions();
}

// ===================== CHART =====================
function updateChart(tot){
  const cCal=tot.carb*4, pCal=tot.prot*4, fCal=tot.fat*9;
  const total=(cCal+pCal+fCal)||1;
  const data=[Math.round(cCal/total*100), Math.round(pCal/total*100), Math.round(fCal/total*100)];
  if(chart){ chart.data.datasets[0].data=data; chart.update(); return; }
  chart = new Chart(document.getElementById('macroChart'),{
    type:'pie',
    data:{
      labels:['Carboidratos','Proteínas','Gorduras'],
      datasets:[{data, backgroundColor:['#1a6bcc','#cc3333','#cc9900'], borderColor:['#4db8ff','#ff7070','#ffd166'], borderWidth:2}]
    },
    options:{
      responsive:true, maintainAspectRatio:false,
      plugins:{
        legend:{position:'bottom',labels:{color:'#fff',font:{family:'Rajdhani',size:12},padding:10}},
        tooltip:{callbacks:{label:ctx=>` ${ctx.label}: ${ctx.raw}%`}}
      }
    }
  });
}

// ===================== MANIPULADOS =====================
function addCompound(){
  const body=document.getElementById('compBody');
  const emp=document.getElementById('compEmpty'); if(emp) emp.remove();
  compCtr++;
  const id=`comp${compCtr}`;
  const row=document.createElement('div'); row.id=id; row.className='entry-row';
  row.innerHTML=`
    <div class="entry-top"><button onclick="removeRow('${id}','compBody','compEmpty','Nenhum manipulado adicionado')" class="btn btn-red btn-icon-only">✕</button></div>
    <div class="mb12"><label class="lbl">Substância</label><input type="text" placeholder="Ex: Creatina monohidratada"></div>
    <div class="g2">
      <div><label class="lbl">Dosagem</label><input type="text" placeholder="Ex: 5g"></div>
      <div><label class="lbl">Momento</label><input type="text" placeholder="Ex: Pré-treino"></div>
    </div>`;
  body.appendChild(row);
}

// ===================== ERGOGÊNICOS =====================
function addErgogenic(){
  const body=document.getElementById('ergoBody');
  const emp=document.getElementById('ergoEmpty'); if(emp) emp.remove();
  ergoCtr++;
  const id=`ergo${ergoCtr}`;
  const row=document.createElement('div'); row.id=id; row.className='entry-row';
  row.innerHTML=`
    <div class="entry-top"><button onclick="removeRow('${id}','ergoBody','ergoEmpty','Nenhum ergogênico adicionado')" class="btn btn-red btn-icon-only">✕</button></div>
    <div class="mb12"><label class="lbl">Substância</label><input type="text" placeholder="Ex: Testosterona Cipionato"></div>
    <div class="g2">
      <div><label class="lbl">Dose / Aplicação</label><input type="text" placeholder="Ex: 250mg / IM"></div>
      <div><label class="lbl">Frequência Semanal</label><input type="text" placeholder="Ex: 2x por semana"></div>
    </div>`;
  body.appendChild(row);
}

function removeRow(rowId,bodyId,emptyId,emptyTxt){
  const r=document.getElementById(rowId); if(r) r.remove();
  const body=document.getElementById(bodyId);
  if(!body.children.length){
    const div=document.createElement('div'); div.id=emptyId; div.className='empty-hint';
    div.textContent=emptyTxt;
    body.appendChild(div);
  }
}

// ===================== PDF EXPORT (impressão nativa via Blob URL) =====================
function exportPDF(){
  const btn = document.getElementById('pdfBtn');
  btn.textContent = '⏳ Preparando...'; btn.disabled = true;

  try {
    const name     = document.getElementById('sName').value || 'Aluno';
    const age      = document.getElementById('sAge').value;
    const weight   = document.getElementById('sWeight').value;
    const height   = document.getElementById('sHeight').value;
    const tmb      = document.getElementById('tmbResult').textContent;
    const get      = document.getElementById('getResult').textContent;
    const logo     = _logoMemory || lsGet('td_mobile_logo') || '';
    const obs      = document.getElementById('observations').value;
    const water    = document.getElementById('sWater').value;
    const tot      = allTotals();
    const chartImg = chart ? chart.toBase64Image() : '';
    const version  = currentStudentId ? ((students.find(s=>s.id===currentStudentId)?.pdfHistory?.length)||0)+1 : 1;

    const compRows = [], ergoRows = [];
    document.querySelectorAll('#compBody .entry-row').forEach(row => {
      const ins = row.querySelectorAll('input');
      compRows.push([ins[0]?.value||'', ins[1]?.value||'', ins[2]?.value||'']);
    });
    document.querySelectorAll('#ergoBody .entry-row').forEach(row => {
      const ins = row.querySelectorAll('input');
      ergoRows.push([ins[0]?.value||'', ins[1]?.value||'', ins[2]?.value||'']);
    });

    const body = buildPDF({name,age,weight,height,tmb,get,logo,obs,water,freeDays,tot,chartImg,compRows,ergoRows,version,coachContact});

    if(currentStudentId){
      const st = students.find(s=>s.id===currentStudentId);
      if(st){
        st.pdfHistory = st.pdfHistory || [];
        st.pdfHistory.push({date: new Date().toLocaleString('pt-BR')});
        st.updatedAt = Date.now();
        saveStudentsToStorage();
        renderStudentsList();
      }
    }

    const fullHTML = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=794, initial-scale=1">
<title>TEAM DECA — ${name}</title>
<link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,400;0,700;1,400;1,700;1,900&family=Rajdhani:wght@400;600;700&display=swap" rel="stylesheet">
<style>
  @page { size: A4 portrait; margin: 0; }
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    background: #000 !important;
    color: #fff;
    font-family: 'Rajdhani', sans-serif;
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
    color-adjust: exact !important;
  }
  .pb {
    page-break-before: always !important;
    break-before: page !important;
  }
  @media print {
    * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
    .pb { page-break-before: always !important; break-before: page !important; }
    .no-print { display: none !important; }
  }
  #print-bar {
    position: fixed; bottom: 0; left: 0; right: 0; z-index: 9999;
    background: #0a1628; border-top: 2px solid #00aaff;
    padding: 14px 16px calc(14px + env(safe-area-inset-bottom)); display: flex; align-items: center; justify-content: space-between;
    font-family: 'Rajdhani', sans-serif; gap: 12px; flex-wrap: wrap;
  }
  /* Modo de impressão em papel: inverte fundo escuro -> claro, imagens ficam normais */
  body.print-light { filter: invert(1) hue-rotate(180deg); }
  body.print-light img { filter: invert(1) hue-rotate(180deg); }
</style>
</head>
<body>

${body}

<div id="print-bar" class="no-print">
  <div style="color:#fff;font-size:13px;">
    <span style="color:#00aaff;font-weight:700;">1.</span> Toque em <strong>Compartilhar / Imprimir</strong> e escolha <strong>Salvar em PDF</strong><br>
    <span style="color:#00aaff;font-weight:700;">2.</span> No Android/Chrome, use "Salvar como PDF" no diálogo de impressão
  </div>
  <div style="display:flex;gap:8px;flex-wrap:wrap;">
    <button onclick="document.body.classList.toggle('print-light'); this.textContent = document.body.classList.contains('print-light') ? '🌙 VOLTAR AO ESCURO' : '📄 VERSÃO P/ IMPRESSÃO';"
      style="background:transparent;color:#00aaff;border:1px solid #00aaff;padding:12px 18px;border-radius:6px;font-family:'Barlow Condensed',sans-serif;font-style:italic;font-weight:700;font-size:14px;letter-spacing:.5px;cursor:pointer;min-height:44px;">
      📄 VERSÃO P/ IMPRESSÃO
    </button>
    <button onclick="window.print()"
      style="background:linear-gradient(135deg,#003d82,#0066cc);color:#fff;border:none;padding:12px 22px;border-radius:6px;font-family:'Barlow Condensed',sans-serif;font-style:italic;font-weight:700;font-size:15px;letter-spacing:1px;cursor:pointer;min-height:44px;">
      🖨️ SALVAR / IMPRIMIR
    </button>
  </div>
</div>

<script>
  window.addEventListener('load', function(){
    setTimeout(function(){ window.print(); }, 900);
  });
<\/script>
</body>
</html>`;

    const blob = new Blob([fullHTML], { type: 'text/html;charset=utf-8' });
    const blobUrl = URL.createObjectURL(blob);
    const win = window.open(blobUrl, '_blank');

    if (!win || win.closed) {
      // Fallback para navegadores mobile que bloqueiam popup (ex: Safari iOS) —
      // navegação programática de blob: também é bloqueada em Chrome recente,
      // então baixamos o HTML como arquivo: o usuário abre e usa o botão
      // "SALVAR / IMPRIMIR" dentro dele, ou o Compartilhar > Salvar em PDF.
      const a = document.createElement('a');
      a.href = blobUrl;
      a.download = `TEAM_DECA_${name.replace(/[^\w\-]+/g,'_')}.html`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      alert('O PDF não pôde abrir em nova aba. Baixamos o arquivo — abra-o e toque em "SALVAR / IMPRIMIR" para gerar o PDF.');
      setTimeout(() => URL.revokeObjectURL(blobUrl), 60000);
    } else {
      setTimeout(() => URL.revokeObjectURL(blobUrl), 60000);
    }

  } catch(e) {
    console.error('Erro PDF:', e);
    alert('Erro: ' + e.message);
  } finally {
    btn.innerHTML = '⬇ PDF';
    btn.disabled = false;
  }
}

function pdfTH(tx){ return `<th style="padding:9px 12px;text-align:left;color:#00aaff;font-size:11px;text-transform:uppercase;letter-spacing:1px;background:#0b1e45;border-bottom:2px solid #00aaff;font-family:'Barlow Condensed',sans-serif;">${tx}</th>`; }
function pdfTD(tx,extra=''){ return `<td style="padding:8px 12px;color:#d0d8e8;font-size:13px;border-bottom:1px solid #1a3d6e;${extra}">${tx}</td>`; }
function pdfTHC(tx){ return `<th style="padding:9px 12px;text-align:center;color:#00aaff;font-size:11px;text-transform:uppercase;letter-spacing:1px;background:#0b1e45;border-bottom:2px solid #00aaff;font-family:'Barlow Condensed',sans-serif;">${tx}</th>`; }
function pdfTDC(tx){ return `<td style="padding:8px 12px;color:#d0d8e8;font-size:13px;border-bottom:1px solid #1a3d6e;text-align:center;">${tx}</td>`; }

function buildPDF(d){
  const {name,age,weight,height,tmb,get,logo,obs,water,freeDays,tot,chartImg,compRows,ergoRows,version,coachContact} = d;
  const waterHTML = water ? `${water} ml (${(parseFloat(water)/1000).toFixed(1)} L)` : '—';
  const freeDaysHTML = (freeDays && freeDays.length)
    ? DAY_ORDER.filter(d2=>freeDays.includes(d2)).map(d2=>DAY_ABBR[d2]).join(', ')
    : 'Nenhuma';

  const getNum = parseFloat((get||'').replace(/\./g,'').replace(',','.'));
  const calDiff = (!isNaN(getNum) && getNum>0) ? tot.cal - getNum : null;
  const calDiffPct = calDiff!==null ? Math.round(Math.abs(calDiff)/getNum*100) : null;
  const calCompareHTML = calDiff!==null ? `
    <div style="margin-top:14px;background:${calDiff<0?'rgba(0,200,100,.08)':'rgba(255,140,0,.08)'};border:1px solid ${calDiff<0?'rgba(0,200,100,.3)':'rgba(255,150,0,.3)'};border-radius:4px;padding:12px 16px;font-size:13px;color:#e8f0fa;font-family:'Rajdhani',sans-serif;">
      <strong style="color:${calDiff<0?'#00cc66':'#ffaa33'};font-family:'Barlow Condensed',sans-serif;">${Math.abs(calDiff)<1?'Dieta em manutenção':(calDiff<0?'Déficit calórico':'Superávit calórico')}:</strong>
      Esta dieta soma <strong>${f1(tot.cal)} kcal</strong>${Math.abs(calDiff)<1?', igual ao seu GET.':` — ${f1(Math.abs(calDiff))} kcal ${calDiff<0?'abaixo':'acima'} do seu GET (${calDiffPct}% de ${calDiff<0?'déficit':'superávit'}).`}
    </div>` : '';

  const pageFooter = (n) => `
    <div style="position:absolute;bottom:28px;left:40px;right:40px;display:flex;justify-content:space-between;align-items:center;border-top:1px solid rgba(0,170,255,.2);padding-top:14px;">
      <div style="font-size:11px;color:rgba(255,255,255,.25);font-style:italic;font-family:'Barlow Condensed',sans-serif;">TEAM DECA — Consultoria Fitness Profissional${coachContact ? ' · '+coachContact : ''}</div>
      <div style="font-size:11px;color:rgba(255,255,255,.25);font-family:'Rajdhani',sans-serif;">${new Date().toLocaleDateString('pt-BR')} · Página ${n}/4</div>
    </div>`;
  const waterFreeBarHTML = `
    <div style="display:flex;gap:14px;margin-bottom:18px;">
      <div style="flex:1;background:#071629;border:1px solid #1a3d6e;border-top:3px solid #00aaff;border-radius:4px;padding:12px 16px;">
        <div style="font-size:9px;color:rgba(255,255,255,.4);text-transform:uppercase;letter-spacing:1px;font-family:'Rajdhani',sans-serif;">💧 Meta de Água Diária</div>
        <div style="font-size:18px;font-weight:900;font-style:italic;color:#00aaff;font-family:'Barlow Condensed',sans-serif;">${waterHTML}</div>
      </div>
      <div style="flex:1;background:#071629;border:1px solid #1a3d6e;border-top:3px solid #00aaff;border-radius:4px;padding:12px 16px;">
        <div style="font-size:9px;color:rgba(255,255,255,.4);text-transform:uppercase;letter-spacing:1px;font-family:'Rajdhani',sans-serif;">🍔 Refeições Livres na Semana</div>
        <div style="font-size:18px;font-weight:900;font-style:italic;color:#00aaff;font-family:'Barlow Condensed',sans-serif;">${freeDaysHTML}</div>
      </div>
    </div>`;
  const logoTag = logo ? `<img src="${logo}" style="max-width:280px;max-height:180px;object-fit:contain;display:block;margin:0 auto;" crossorigin="anonymous">` : '';
  const logoSmall = logo ? `<img src="${logo}" style="height:45px;object-fit:contain;" crossorigin="anonymous">` : `<span style="font-size:20px;font-weight:900;font-style:italic;color:#00aaff;font-family:'Barlow Condensed',sans-serif;">TEAM DECA</span>`;
  const cCal=tot.carb*4, pCal=tot.prot*4, fCal=tot.fat*9, tCal=(cCal+pCal+fCal)||1;
  const pctC=Math.round(cCal/tCal*100), pctP=Math.round(pCal/tCal*100), pctF=Math.round(fCal/tCal*100);

  const pgHdr = (title) => `
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:28px;border-bottom:2px solid #00aaff;padding-bottom:14px;">
      <div>
        <div style="font-size:28px;font-weight:900;font-style:italic;color:#00aaff;text-transform:uppercase;letter-spacing:3px;font-family:'Barlow Condensed',sans-serif;">${title}</div>
        <div style="color:rgba(255,255,255,.4);font-size:12px;text-transform:uppercase;letter-spacing:2px;margin-top:2px;font-family:'Barlow Condensed',sans-serif;">${name}</div>
      </div>
      ${logoSmall}
    </div>`;

  const mealTablesHTML = meals.map(meal=>{
    const mt=mealTotals(meal);
    const rows=meal.items.map(item=>{
      const f2=foods[item.fi]; if(!f2) return '';
      const cv=calcItem(item);
      const isUnitFood = f2.wpu || f2.calcMode==='wpu' || f2.calcMode==='perUnit';
      const qtyDisplay = isUnitFood ? item.qty+' '+(f2.unit||'un') : item.qty+'g';
      return `<tr>${pdfTD(f2.name)}${pdfTDC(qtyDisplay)}${pdfTDC(f1(cv.cal))}${pdfTDC(f1(cv.carb)+'g')}${pdfTDC(f1(cv.prot)+'g')}${pdfTDC(f1(cv.fat)+'g')}</tr>`;
    }).join('');
    return `
      <div style="margin-bottom:18px;">
        <div style="background:#0b1e45;padding:9px 14px;border-left:4px solid #00aaff;display:flex;justify-content:space-between;align-items:center;">
          <span style="font-family:'Barlow Condensed',sans-serif;font-style:italic;font-weight:700;font-size:15px;color:#00aaff;text-transform:uppercase;letter-spacing:1px;">${meal.name}</span>
          ${meal.time ? `<span style="font-family:'Rajdhani',sans-serif;font-size:12px;color:rgba(255,255,255,.5);">🕐 ${meal.time}</span>` : ''}
        </div>
        <table style="width:100%;border-collapse:collapse;background:#071629;border:1px solid #1a3d6e;">
          <thead><tr>${pdfTH('Alimento')}${pdfTHC('Qtd')}${pdfTHC('Kcal')}${pdfTHC('Carb')}${pdfTHC('Prot')}${pdfTHC('Gord')}</tr></thead>
          <tbody>${rows||'<tr><td colspan="6" style="padding:10px;text-align:center;color:rgba(255,255,255,.3);font-style:italic;">Sem alimentos</td></tr>'}</tbody>
          <tfoot><tr>
            <td colspan="2" style="padding:8px 12px;background:#0d1f3c;color:#00aaff;font-weight:700;font-size:12px;text-transform:uppercase;font-family:'Barlow Condensed',sans-serif;border-top:1px solid #00aaff;">TOTAL DA REFEIÇÃO</td>
            <td style="padding:8px;background:#0d1f3c;color:#00aaff;font-weight:700;text-align:center;font-size:12px;border-top:1px solid #00aaff;">${f1(mt.cal)}</td>
            <td style="padding:8px;background:#0d1f3c;color:#00aaff;font-weight:700;text-align:center;font-size:12px;border-top:1px solid #00aaff;">${f1(mt.carb)}g</td>
            <td style="padding:8px;background:#0d1f3c;color:#00aaff;font-weight:700;text-align:center;font-size:12px;border-top:1px solid #00aaff;">${f1(mt.prot)}g</td>
            <td style="padding:8px;background:#0d1f3c;color:#00aaff;font-weight:700;text-align:center;font-size:12px;border-top:1px solid #00aaff;">${f1(mt.fat)}g</td>
          </tr></tfoot>
        </table>
        ${meal.notes ? `<div style="background:rgba(0,170,255,.06);border-left:2px solid rgba(0,170,255,.3);border-radius:0 0 4px 4px;padding:8px 12px;font-size:12px;color:#c8d8ea;font-style:italic;">💬 ${meal.notes}</div>` : ''}
      </div>`;
  }).join('') || '<div style="color:rgba(255,255,255,.3);text-align:center;padding:30px;font-style:italic;">Nenhuma refeição cadastrada.</div>';

  const seenSub = new Map();
  meals.forEach(m=>m.items.forEach(it=>{ if(!seenSub.has(it.fi)) seenSub.set(it.fi,it.qty); }));
  const pdfSubRows = [];
  seenSub.forEach((qty,fi)=>{
    const food=foods[fi]; if(!food) return;
    const subs=findTacoSubs(food);
    if(!subs.length) return;
    pdfSubRows.push({food,qty,subs});
  });
  const th  = tx=>`<th style="padding:8px 10px;text-align:left;color:#00aaff;font-size:10px;text-transform:uppercase;letter-spacing:1px;background:#0b1e45;border-bottom:2px solid #00aaff;font-family:'Barlow Condensed',sans-serif;">${tx}</th>`;
  const thc = tx=>`<th style="padding:8px 10px;text-align:center;color:#00aaff;font-size:10px;text-transform:uppercase;letter-spacing:1px;background:#0b1e45;border-bottom:2px solid #00aaff;font-family:'Barlow Condensed',sans-serif;">${tx}</th>`;
  const td  = tx=>`<td style="padding:7px 10px;color:#d0d8e8;font-size:12px;border-bottom:1px solid #1a3d6e;">${tx}</td>`;
  const tdc = tx=>`<td style="padding:7px 10px;color:#d0d8e8;font-size:12px;border-bottom:1px solid #1a3d6e;text-align:center;">${tx}</td>`;
  const isUnitF = f=>(f.wpu||f.calcMode==='wpu'||f.calcMode==='perUnit');
  const substTableHTML = pdfSubRows.length
    ? `<table style="width:100%;border-collapse:collapse;background:#071629;border:1px solid #1a3d6e;">
        <thead><tr>${th('Alimento Prescrito')}${thc('Qtd.')}${th('Substituto 1 (TACO)')}${thc('Qtd. equiv.')}${th('Substituto 2 (TACO)')}${thc('Qtd. equiv.')}</tr></thead>
        <tbody>${pdfSubRows.map(r=>{
          const qStr = isUnitF(r.food) ? r.qty+' '+(r.food.unit||'un') : r.qty+'g';
          const e1 = r.subs[0] ? equivQtyStr(r.food,r.qty,r.subs[0]) : '—';
          const e2 = r.subs[1] ? equivQtyStr(r.food,r.qty,r.subs[1]) : '—';
          return `<tr>${td(r.food.name)}${tdc(qStr)}${td(r.subs[0]?r.subs[0].name:'—')}${tdc(e1)}${td(r.subs[1]?r.subs[1].name:'—')}${tdc(e2)}</tr>`;
        }).join('')}</tbody>
      </table>`
    : '<div style="color:rgba(255,255,255,.3);font-style:italic;padding:12px 0;text-align:center;">Nenhum alimento prescrito na dieta.</div>';

  const compHTML = compRows.length
    ? compRows.map(r=>`<tr>${pdfTD(r[0])}${pdfTDC(r[1])}${pdfTDC(r[2])}</tr>`).join('')
    : '<tr><td colspan="3" style="padding:12px;text-align:center;color:rgba(255,255,255,.3);font-style:italic;">Nenhum manipulado prescrito</td></tr>';
  const ergoHTML = ergoRows.length
    ? ergoRows.map(r=>`<tr>${pdfTD(r[0])}${pdfTDC(r[1])}${pdfTDC(r[2])}</tr>`).join('')
    : '<tr><td colspan="3" style="padding:12px;text-align:center;color:rgba(255,255,255,.3);font-style:italic;">Nenhum ergogênico prescrito</td></tr>';
  const obsHTML = obs.trim()
    ? obs.split('\n').filter(l=>l.trim()).map(l=>`<div style="padding:7px 0;border-bottom:1px solid rgba(26,61,110,.35);color:#d0d8e8;font-size:13px;font-family:'Rajdhani',sans-serif;"><span style="color:#00aaff;margin-right:8px;">▸</span>${l.trim()}</div>`).join('')
    : '<div style="color:rgba(255,255,255,.3);font-style:italic;padding:12px 0;">Nenhuma observação registrada.</div>';

  const macroCardStyle = (top,numColor) => `background:#0d1f3c;border:1px solid #1a3d6e;border-top:3px solid ${top};border-radius:4px;padding:14px;text-align:center;`;
  const microCard = (label,val,color) => `
    <div style="background:#0d1f3c;border:1px solid #1a3d6e;border-top:3px solid ${color};border-radius:4px;padding:12px 8px;text-align:center;">
      <div style="font-size:9px;color:rgba(255,255,255,.4);text-transform:uppercase;letter-spacing:1px;font-family:'Rajdhani',sans-serif;">${label}</div>
      <div style="font-size:18px;font-weight:900;font-style:italic;color:${color};font-family:'Barlow Condensed',sans-serif;">${val}</div>
    </div>`;

  return `
<div style="width:794px;background:#000;color:#fff;font-family:'Barlow Condensed',sans-serif;">

  <!-- PAGE 1: COVER -->
  <div style="width:794px;min-height:1122px;background:#000;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:60px 50px;position:relative;overflow:hidden;">
    <div style="position:absolute;inset:0;background:radial-gradient(ellipse at 50% 40%,rgba(0,100,200,.13) 0%,transparent 65%);pointer-events:none;"></div>
    <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:500px;height:500px;border-radius:50%;border:1px solid rgba(0,170,255,.06);pointer-events:none;"></div>

    <div style="margin-bottom:36px;text-align:center;">${logoTag}</div>

    <div style="font-size:80px;font-weight:900;font-style:italic;color:#00aaff;text-align:center;letter-spacing:8px;text-transform:uppercase;line-height:1;">TEAM DECA</div>

    <div style="width:220px;height:2px;background:linear-gradient(90deg,transparent,#00aaff,transparent);margin:20px auto;"></div>

    <div style="font-size:17px;font-style:italic;color:rgba(255,255,255,.5);text-align:center;letter-spacing:4px;text-transform:uppercase;margin-bottom:56px;">
      TRANSFORME SEU CORPO. SUPERE SEUS LIMITES.
    </div>

    <div style="background:rgba(0,50,120,.2);border:1px solid rgba(0,170,255,.3);border-radius:8px;padding:32px 52px;text-align:center;min-width:380px;">
      <div style="font-size:34px;font-weight:900;font-style:italic;color:#fff;margin-bottom:18px;text-transform:uppercase;letter-spacing:2px;">${name}</div>
      <div style="display:flex;justify-content:center;gap:36px;font-size:15px;color:rgba(255,255,255,.65);font-family:'Rajdhani',sans-serif;">
        ${age    ? `<div><div style="color:#00aaff;font-weight:700;font-size:11px;text-transform:uppercase;letter-spacing:1px;font-family:'Barlow Condensed',sans-serif;">Idade</div>${age} anos</div>` : ''}
        ${weight ? `<div><div style="color:#00aaff;font-weight:700;font-size:11px;text-transform:uppercase;letter-spacing:1px;font-family:'Barlow Condensed',sans-serif;">Peso</div>${weight} kg</div>` : ''}
        ${height ? `<div><div style="color:#00aaff;font-weight:700;font-size:11px;text-transform:uppercase;letter-spacing:1px;font-family:'Barlow Condensed',sans-serif;">Altura</div>${height} cm</div>` : ''}
      </div>
      ${tmb!=='—' ? `
      <div style="margin-top:18px;padding-top:16px;border-top:1px solid rgba(0,170,255,.2);display:flex;justify-content:center;gap:36px;font-size:15px;color:rgba(255,255,255,.6);font-family:'Rajdhani',sans-serif;">
        <div><div style="color:#00aaff;font-weight:700;font-size:11px;text-transform:uppercase;letter-spacing:1px;font-family:'Barlow Condensed',sans-serif;">TMB</div>${tmb} kcal</div>
        <div><div style="color:#00aaff;font-weight:700;font-size:11px;text-transform:uppercase;letter-spacing:1px;font-family:'Barlow Condensed',sans-serif;">GET</div>${get} kcal</div>
      </div>` : ''}
    </div>

    <div style="position:absolute;bottom:14px;right:24px;font-size:10px;color:rgba(255,255,255,.2);font-family:'Rajdhani',sans-serif;">Versão ${version||1} · ${new Date().toLocaleDateString('pt-BR')} · Página 1/4</div>
    <div style="position:absolute;bottom:0;left:0;right:0;height:4px;background:linear-gradient(90deg,transparent,#00aaff 30%,#0055cc 70%,transparent);"></div>
  </div>

  <!-- PAGE 2: DIET -->
  <div class="pb" style="width:794px;min-height:1122px;background:#000;padding:40px;page-break-before:always;position:relative;">
    ${pgHdr('Planejamento Alimentar')}
    ${waterFreeBarHTML}
    ${mealTablesHTML}

    <div style="margin-top:20px;background:#071629;border:1px solid #1a3d6e;border-top:3px solid #00aaff;border-radius:4px;padding:20px;page-break-inside:avoid;break-inside:avoid;">
      <div style="font-size:17px;font-weight:700;font-style:italic;color:#00aaff;text-transform:uppercase;letter-spacing:2px;border-left:3px solid #00aaff;padding-left:10px;margin-bottom:16px;font-family:'Barlow Condensed',sans-serif;">Resumo de Macronutrientes</div>
      <div style="display:flex;gap:16px;align-items:center;">
        <div style="flex:1;display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:10px;">
          <div style="${macroCardStyle('#00aaff','#00aaff')}">
            <div style="font-size:9px;color:rgba(255,255,255,.4);text-transform:uppercase;letter-spacing:1px;font-family:'Rajdhani',sans-serif;">Calorias</div>
            <div style="font-size:26px;font-weight:900;font-style:italic;color:#00aaff;font-family:'Barlow Condensed',sans-serif;">${f1(tot.cal)}</div>
            <div style="font-size:10px;color:rgba(255,255,255,.35);font-family:'Rajdhani',sans-serif;">kcal</div>
          </div>
          <div style="${macroCardStyle('#4db8ff','#4db8ff')}">
            <div style="font-size:9px;color:rgba(255,255,255,.4);text-transform:uppercase;letter-spacing:1px;font-family:'Rajdhani',sans-serif;">Carboidratos</div>
            <div style="font-size:26px;font-weight:900;font-style:italic;color:#4db8ff;font-family:'Barlow Condensed',sans-serif;">${f1(tot.carb)}g</div>
            <div style="font-size:10px;color:rgba(255,255,255,.35);font-family:'Rajdhani',sans-serif;">${pctC}% das kcal</div>
          </div>
          <div style="${macroCardStyle('#ff7070','#ff7070')}">
            <div style="font-size:9px;color:rgba(255,255,255,.4);text-transform:uppercase;letter-spacing:1px;font-family:'Rajdhani',sans-serif;">Proteínas</div>
            <div style="font-size:26px;font-weight:900;font-style:italic;color:#ff7070;font-family:'Barlow Condensed',sans-serif;">${f1(tot.prot)}g</div>
            <div style="font-size:10px;color:rgba(255,255,255,.35);font-family:'Rajdhani',sans-serif;">${pctP}% das kcal</div>
          </div>
          <div style="${macroCardStyle('#ffd166','#ffd166')}">
            <div style="font-size:9px;color:rgba(255,255,255,.4);text-transform:uppercase;letter-spacing:1px;font-family:'Rajdhani',sans-serif;">Gorduras</div>
            <div style="font-size:26px;font-weight:900;font-style:italic;color:#ffd166;font-family:'Barlow Condensed',sans-serif;">${f1(tot.fat)}g</div>
            <div style="font-size:10px;color:rgba(255,255,255,.35);font-family:'Rajdhani',sans-serif;">${pctF}% das kcal</div>
          </div>
        </div>
        ${chartImg ? `<div style="flex-shrink:0;"><img src="${chartImg}" style="width:170px;height:170px;object-fit:contain;"></div>` : ''}
      </div>
      ${calCompareHTML}
    </div>

    <div style="margin-top:16px;background:#071629;border:1px solid #1a3d6e;border-top:3px solid #00aaff;border-radius:4px;padding:20px;page-break-inside:avoid;break-inside:avoid;">
      <div style="font-size:17px;font-weight:700;font-style:italic;color:#00aaff;text-transform:uppercase;letter-spacing:2px;border-left:3px solid #00aaff;padding-left:10px;margin-bottom:16px;font-family:'Barlow Condensed',sans-serif;">Micronutrientes Totais (estimado)</div>
      <div style="display:grid;grid-template-columns:repeat(5,1fr);gap:10px;">
        ${microCard('Fibra', f1(tot.fiber)+'g', '#7ed957')}
        ${microCard('Sódio', f1(tot.sodium)+'mg', '#ff9d6c')}
        ${microCard('Cálcio', f1(tot.calcium)+'mg', '#9fd8ff')}
        ${microCard('Ferro', f1(tot.iron)+'mg', '#e0a1ff')}
        ${microCard('Potássio', f1(tot.potassium)+'mg', '#ffe08a')}
      </div>
      <div style="font-size:10px;color:rgba(255,255,255,.3);margin-top:10px;">Baseado na tabela TACO; alimentos sem esse dado contam como 0.</div>
    </div>
    ${pageFooter(2)}
  </div>

  <!-- PAGE 3: SUBSTITUIÇÕES -->
  <div class="pb" style="width:794px;min-height:1122px;background:#000;padding:40px;page-break-before:always;position:relative;">
    ${pgHdr('Alimentos de Substituição')}
    <div style="color:rgba(255,255,255,.4);font-size:12px;margin-bottom:18px;">Equivalência calórica calculada com base na tabela TACO. Troque pelo substituto na quantidade indicada para manter os macros da dieta.</div>
    ${substTableHTML}
    ${pageFooter(3)}
  </div>

  <!-- PAGE 4: EXTRAS -->
  <div class="pb" style="width:794px;min-height:1122px;background:#000;padding:40px;page-break-before:always;position:relative;">
    ${pgHdr('Prescrições & Orientações')}

    <div style="margin-bottom:26px;">
      <div style="font-size:17px;font-weight:700;font-style:italic;color:#00aaff;text-transform:uppercase;letter-spacing:2px;border-left:3px solid #00aaff;padding-left:10px;margin-bottom:12px;font-family:'Barlow Condensed',sans-serif;">Manipulados</div>
      <table style="width:100%;border-collapse:collapse;background:#071629;border:1px solid #1a3d6e;">
        <thead><tr>${pdfTH('Substância')}${pdfTHC('Dosagem')}${pdfTHC('Momento')}</tr></thead>
        <tbody>${compHTML}</tbody>
      </table>
    </div>

    <div style="margin-bottom:26px;">
      <div style="font-size:17px;font-weight:700;font-style:italic;color:#00aaff;text-transform:uppercase;letter-spacing:2px;border-left:3px solid #00aaff;padding-left:10px;margin-bottom:12px;font-family:'Barlow Condensed',sans-serif;">Ergogênicos</div>
      <table style="width:100%;border-collapse:collapse;background:#071629;border:1px solid #1a3d6e;">
        <thead><tr>${pdfTH('Substância')}${pdfTHC('Dose / Aplicação')}${pdfTHC('Frequência Semanal')}</tr></thead>
        <tbody>${ergoHTML}</tbody>
      </table>
    </div>

    <div style="margin-bottom:26px;">
      <div style="font-size:17px;font-weight:700;font-style:italic;color:#00aaff;text-transform:uppercase;letter-spacing:2px;border-left:3px solid #00aaff;padding-left:10px;margin-bottom:12px;font-family:'Barlow Condensed',sans-serif;">Observações & Orientações</div>
      <div style="background:#071629;border:1px solid #1a3d6e;border-radius:4px;padding:16px;">${obsHTML}</div>
    </div>

    ${pageFooter(4)}
  </div>

</div>`;
}

// ===================== PDF IMPORT =====================
pdfjsLib.GlobalWorkerOptions.workerSrc =
  'https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/build/pdf.worker.min.js';

let importData = null;

function openImportModal(){
  importData = null;
  document.getElementById('importStatus').innerHTML = '';
  document.getElementById('importPreview').innerHTML = '';
  document.getElementById('importActions').classList.add('hidden');
  document.getElementById('importFileInput').value = '';
  document.getElementById('modalImport').classList.remove('hidden');
  document.body.classList.add('modal-open');
}
function closeImportModal(){
  document.getElementById('modalImport').classList.add('hidden');
  document.body.classList.remove('modal-open');
}

async function processImportFile(input){
  const file = input.files[0];
  if(!file) return;
  const statusEl  = document.getElementById('importStatus');
  const previewEl = document.getElementById('importPreview');
  const actionsEl = document.getElementById('importActions');

  statusEl.innerHTML  = '<span style="color:#00aaff;">⏳ Lendo PDF, aguarde...</span>';
  previewEl.innerHTML = '';
  actionsEl.classList.add('hidden');

  try {
    const buf = await file.arrayBuffer();
    const pdf = await pdfjsLib.getDocument({ data: buf }).promise;

    const pageTexts = [];
    for(let p = 1; p <= pdf.numPages; p++){
      const page = await pdf.getPage(p);
      const tc   = await page.getTextContent();
      const items = [...tc.items].sort((a,b)=>{
        const dy = Math.round((b.transform[5] - a.transform[5]) / 4);
        return dy !== 0 ? dy : a.transform[4] - b.transform[4];
      });
      pageTexts.push(items.map(i => i.str).join(' '));
    }

    importData = parsePDFPages(pageTexts);
    renderImportPreview(importData, pageTexts);
    statusEl.innerHTML = `<span style="color:#00cc66;">✅ PDF processado! Confira os dados abaixo e toque em Importar.</span>`;
    actionsEl.classList.remove('hidden');
  } catch(e){
    console.error(e);
    statusEl.innerHTML = `<span style="color:#ff6b6b;">❌ Erro ao ler PDF: ${e.message}</span>`;
  }
}

function parsePDFPages(pages){
  const all = pages.join('\n');
  const res = { name:'', age:'', weight:'', height:'', water:'', freeDays:[],
                meals:[], compounds:[], ergogenics:[], observations:'',
                rawComp:'', rawErgo:'' };

  const ageM = all.match(/(\d{1,3})\s*anos/i);
  if(ageM) res.age = ageM[1];

  const wM = all.match(/(\d{2,3}(?:[.,]\d{1,2})?)\s*kg/i);
  if(wM) res.weight = wM[1].replace(',','.');

  const hM = all.match(/(\d{3})\s*cm/i);
  if(hM) res.height = hM[1];

  const nameM = all.match(/LIMITES\.?\s+([A-ZÀ-Üa-zà-ü][A-Za-zÀ-ÿ\s]{2,50?}?)(?:\s{2,}|\s+(?:IDADE|anos|\d{2,3}\s*(?:anos|kg|cm)))/i);
  if(nameM) res.name = nameM[1].trim().replace(/\s+/g,' ');

  // ---- Água & refeições livres ----
  const waterM = all.match(/Meta de [ÁA]gua Di[áa]ria\s*(\d+(?:[.,]\d+)?)\s*ml/i);
  if(waterM) res.water = waterM[1].replace(',','.');

  const freeM = all.match(/Refei[çc][õo]es Livres na Semana\s*((?:(?:Dom|Seg|Ter|Qua|Qui|Sex|S[áa]b)(?:\s*,\s*)?)+|Nenhuma)/i);
  if(freeM && !/nenhuma/i.test(freeM[1])){
    const found = freeM[1].match(/Dom|Seg|Ter|Qua|Qui|Sex|S[áa]b/gi) || [];
    res.freeDays = DAY_ABBR.reduce((acc,abbr,i)=>{
      if(found.some(f=>f.toLowerCase()===abbr.toLowerCase())) acc.push(i);
      return acc;
    },[]);
  }

  const p2 = pages[1] || pages[0] || '';
  const mealBlocks = p2.split(/(?=Refeição\s+\d)/i).filter(b => /^Refeição\s+\d/i.test(b.trim()));

  for(const block of mealBlocks){
    const headerEnd = block.search(/Alimento|TOTAL|Qtd/i);
    const mealName  = block.substring(0, headerEnd > 0 ? headerEnd : 80).trim().replace(/\s+/g,' ');
    const bodyEnd   = block.search(/TOTAL DA REFEIÇÃO/i);
    const mealBody  = block.substring(0, bodyEnd > 0 ? bodyEnd : block.length).toLowerCase();

    const meal = { name: mealName, items:[] };
    const used = new Set();

    for(let fi = 0; fi < foods.length; fi++){
      const fname = foods[fi].name.toLowerCase();
      const idx   = mealBody.indexOf(fname);
      if(idx === -1 || used.has(fi)) continue;
      used.add(fi);

      const after = block.substring(idx + fname.length, idx + fname.length + 80);
      const qM    = after.match(/\s*(\d+(?:\.\d+)?)/);
      const qty   = qM ? parseFloat(qM[1]) : (foods[fi].calcMode === 'perUnit' ? 1 : 100);
      meal.items.push({ fi, qty: isNaN(qty) ? 100 : qty });
    }

    res.meals.push(meal);
  }

  const p3 = pages[2] || '';

  const idxManip = p3.search(/MANIPULADOS/i);
  const idxErgo  = p3.search(/ERGOGÊN/i);
  const idxObs   = p3.search(/OBSERVA[ÇC]/i);

  if(idxManip >= 0){
    const end = idxErgo > idxManip ? idxErgo : (idxObs > idxManip ? idxObs : p3.length);
    res.rawComp = p3.substring(idxManip + 12, end)
      .replace(/Substância|Dosagem|Momento|prescrito|Nenhum/gi,'').replace(/\s{3,}/g,'\n').trim();

    const tokens = res.rawComp.split(/\s{2,}|\n/).map(t=>t.trim()).filter(Boolean);
    for(let i = 0; i + 2 < tokens.length; i += 3)
      res.compounds.push([tokens[i], tokens[i+1]||'', tokens[i+2]||'']);
  }

  if(idxErgo >= 0){
    const end = idxObs > idxErgo ? idxObs : p3.length;
    res.rawErgo = p3.substring(idxErgo + 10, end)
      .replace(/Substância|Dose|Aplicação|Frequência Semanal|prescrito|Nenhum|ERGOGÊN\w*/gi,'')
      .replace(/\s{3,}/g,'\n').trim();

    const tokens = res.rawErgo.split(/\s{2,}|\n/).map(t=>t.trim()).filter(Boolean);
    for(let i = 0; i + 2 < tokens.length; i += 3)
      res.ergogenics.push([tokens[i], tokens[i+1]||'', tokens[i+2]||'']);
  }

  if(idxObs >= 0){
    const raw     = p3.substring(idxObs + 24);
    const footerI = raw.search(/TEAM DECA.*Consultoria|^\d{2}\/\d{2}\/\d{4}/im);
    const content = raw.substring(0, footerI > 0 ? footerI : raw.length);
    res.observations = content.split(/▸|•/).map(l=>l.trim()).filter(Boolean).map(l=>'• '+l).join('\n');
  }

  return res;
}

function renderImportPreview(d, rawPages){
  const mealsFound = d.meals.filter(m=>m.items.length>0).length;

  document.getElementById('importPreview').innerHTML = `
    <div style="margin-top:14px;display:grid;gap:12px;">

      <div style="background:#071629;border:1px solid #1a3d6e;border-top:2px solid #00aaff;border-radius:4px;padding:14px;">
        <div style="color:#00aaff;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1px;margin-bottom:10px;">Dados do Aluno</div>
        <div class="g2" style="gap:8px;margin-bottom:8px;">
          <div><label class="lbl">Nome</label><input id="ip_name" type="text" value="${d.name}" placeholder="—"></div>
          <div><label class="lbl">Idade</label><input id="ip_age" type="number" inputmode="numeric" value="${d.age}" placeholder="—"></div>
        </div>
        <div class="g2" style="gap:8px;">
          <div><label class="lbl">Peso (kg)</label><input id="ip_weight" type="number" inputmode="decimal" value="${d.weight}" placeholder="—"></div>
          <div><label class="lbl">Altura (cm)</label><input id="ip_height" type="number" inputmode="numeric" value="${d.height}" placeholder="—"></div>
        </div>
      </div>

      <div style="background:#071629;border:1px solid #1a3d6e;border-radius:4px;padding:14px;">
        <div style="color:#00aaff;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">Planejamento Alimentar</div>
        ${mealsFound > 0
          ? d.meals.filter(m=>m.items.length>0).map(m=>`
              <div style="margin-bottom:6px;padding:6px 8px;background:rgba(0,170,255,.07);border-left:2px solid #00aaff;border-radius:2px;">
                <div style="color:#fff;font-size:13px;font-weight:600;">${m.name}</div>
                <div style="color:rgba(255,255,255,.45);font-size:11px;">
                  ${m.items.map(it=>foods[it.fi]?.name+' ('+it.qty+(foods[it.fi]?.unit||'g')+')').join(' · ')}
                </div>
              </div>`).join('')
          : `<div style="color:rgba(255,255,255,.3);font-size:12px;font-style:italic;">
               Nenhuma refeição detectada automaticamente. As refeições serão criadas pelo nome apenas — adicione os alimentos manualmente após importar.
             </div>
             ${d.meals.map(m=>`<div style="color:rgba(255,255,255,.4);font-size:12px;padding:3px 0;">• ${m.name}</div>`).join('')}`
        }
      </div>

      ${d.rawComp ? `
      <div style="background:#071629;border:1px solid #1a3d6e;border-radius:4px;padding:14px;">
        <div style="color:#00aaff;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1px;margin-bottom:6px;">
          Manipulados detectados: ${d.compounds.length}
        </div>
        <pre style="color:rgba(255,255,255,.5);font-size:11px;font-family:'Rajdhani',sans-serif;white-space:pre-wrap;max-height:80px;overflow-y:auto;">${d.rawComp}</pre>
      </div>` : ''}

      ${d.rawErgo ? `
      <div style="background:#071629;border:1px solid #1a3d6e;border-radius:4px;padding:14px;">
        <div style="color:#00aaff;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1px;margin-bottom:6px;">
          Ergogênicos detectados: ${d.ergogenics.length}
        </div>
        <pre style="color:rgba(255,255,255,.5);font-size:11px;font-family:'Rajdhani',sans-serif;white-space:pre-wrap;max-height:80px;overflow-y:auto;">${d.rawErgo}</pre>
      </div>` : ''}

      ${d.observations ? `
      <div style="background:#071629;border:1px solid #1a3d6e;border-radius:4px;padding:14px;">
        <div style="color:#00aaff;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1px;margin-bottom:6px;">Observações</div>
        <pre style="color:rgba(255,255,255,.5);font-size:11px;font-family:'Rajdhani',sans-serif;white-space:pre-wrap;max-height:80px;overflow-y:auto;">${d.observations}</pre>
      </div>` : ''}

    </div>`;
}

function applyImport(){
  if(!importData) return;

  document.getElementById('sName').value   = document.getElementById('ip_name')?.value   || importData.name;
  document.getElementById('sAge').value    = document.getElementById('ip_age')?.value    || importData.age;
  document.getElementById('sWeight').value = document.getElementById('ip_weight')?.value || importData.weight;
  document.getElementById('sHeight').value = document.getElementById('ip_height')?.value || importData.height;
  calcTMB();

  document.getElementById('sWater').value = importData.water || '';
  updateWater();
  freeDays = [...(importData.freeDays || [])];
  renderFreeDaysUI();

  meals = []; mealIdCtr = 0;
  importData.meals.forEach(m => {
    mealIdCtr++;
    meals.push({ id: mealIdCtr, name: m.name, items: [...m.items] });
  });
  renderMeals();

  const compBody = document.getElementById('compBody');
  compBody.innerHTML = '<div id="compEmpty" class="empty-hint">Nenhum manipulado adicionado</div>';
  compCtr = 0;
  importData.compounds.forEach(r => {
    addCompound();
    const rows = compBody.querySelectorAll('.entry-row');
    const ins  = rows[rows.length-1].querySelectorAll('input');
    ins[0].value=r[0]; ins[1].value=r[1]; ins[2].value=r[2];
  });

  const ergoBody = document.getElementById('ergoBody');
  ergoBody.innerHTML = '<div id="ergoEmpty" class="empty-hint">Nenhum ergogênico adicionado</div>';
  ergoCtr = 0;
  importData.ergogenics.forEach(r => {
    addErgogenic();
    const rows = ergoBody.querySelectorAll('.entry-row');
    const ins  = rows[rows.length-1].querySelectorAll('input');
    ins[0].value=r[0]; ins[1].value=r[1]; ins[2].value=r[2];
  });

  document.getElementById('observations').value = importData.observations;

  closeImportModal();
  switchTab('aluno');
}

// ===================== INIT =====================
renderMeals();
renderFreeDaysUI();
renderStudentsList();
updateStudentStatusLine();
if(coachContact){
  document.getElementById('coachContact').value = coachContact;
  document.getElementById('coachContactStatus').textContent = 'salvo ✓';
}
if(gcalClientId){
  document.getElementById('gcalClientId').value = gcalClientId;
  updateGcalStatus('desconectado (toque em Conectar)');
}
