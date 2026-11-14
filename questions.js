/* Original USMLE Step 1-style practice questions based on the three uploaded Bootcamp review PDFs.
   This is an educational practice bank, not official NBME/USMLE content.
   Correct answers use a zero-based index: 0=A, 1=B, 2=C, 3=D, 4=E.
   To expand the bank, add objects with unique id, stem, prompt, options, correct,
   explanations (one for EACH option), and optional labs. */
window.STEP1_QUESTIONS = [
{
 id:1, topic:'Cardiology',
 stem:'A full-term male newborn develops profound cyanosis within minutes of delivery. The infant was born to a 34-year-old woman with poorly controlled diabetes mellitus. Physical examination reveals tachypnea, central cyanosis, and a single loud second heart sound. Echocardiography demonstrates that the aorta arises from the right ventricle and the pulmonary artery arises from the left ventricle.',
 prompt:'Which of the following embryologic abnormalities most likely caused this patient\'s condition?',
 options:['Failure of endocardial cushion fusion','Failure of spiraling of the aorticopulmonary septum','Failure of neural crest cell migration resulting in absent septation','Failure of septum primum formation','Persistence of the ductus arteriosus after birth'], correct:1,
 explanations:['Endocardial cushion defects cause atrioventricular septal abnormalities, not reversal of the great arteries.','Correct. Failure of spiral formation produces transposition of the great arteries, creating parallel circulations; maternal diabetes is a recognized association.','A severe conotruncal septation defect instead produces persistent truncus arteriosus with one common arterial trunk.','Defective septum primum formation affects atrial septation.','A patent ductus arteriosus is a vessel connecting the pulmonary artery and aorta, not reversal of their origins.'],
 takeaway:'Transposition of the great arteries: failed spiraling of the aorticopulmonary septum.'
},
{
 id:2, topic:'Nephrology',
 stem:'A 16-year-old girl undergoes ultrasonography after recurrent urinary tract infections. Imaging reveals fusion of the inferior poles of both kidneys, with the fused renal tissue located inferior to its expected position. Kidney function is preserved.',
 prompt:'During embryologic development, kidney ascent was most likely prevented by which structure?',
 options:['Abdominal aorta','Celiac trunk','Superior mesenteric artery','Inferior mesenteric artery','Common iliac artery'], correct:3,
 explanations:['The aorta supplies the renal arteries but is not the typical level at which a horseshoe kidney is trapped.','The celiac trunk supplies the foregut and does not characteristically prevent renal ascent.','The superior mesenteric artery is not the classic landmark that traps the fused kidney.','Correct. The inferior mesenteric artery stops the ascent of a horseshoe kidney with fused lower poles.','Common iliac arteries are not the classic cause of failure of ascent.'],
 takeaway:'Horseshoe kidney: lower poles fuse and are caught beneath the inferior mesenteric artery.'
},
{
 id:3, topic:'Pulmonology',
 stem:'A male infant is delivered at 29 weeks of gestation. Shortly after birth, he develops tachypnea, nasal flaring, retractions, and expiratory grunting. Chest radiography demonstrates diffuse bilateral ground-glass opacities and air bronchograms. Histology would show collapsed alveoli lined by eosinophilic membranes.',
 prompt:'Which abnormality most directly contributes to the condition?',
 options:['Decreased activity of alveolar macrophages','Deficient surfactant production by type II pneumocytes','Increased proliferation of type I pneumocytes','Excessive production of bronchial mucus','Increased pulmonary capillary hydrostatic pressure'], correct:1,
 explanations:['Macrophages provide alveolar immune defense, not the key surface-tension regulation.','Correct. Immature type II pneumocytes make insufficient surfactant, causing high surface tension, alveolar collapse, and hyaline membranes.','Type I cells primarily perform gas exchange; proliferation is not the initiating defect.','Bronchial mucus plugging is not the defining mechanism of neonatal respiratory distress syndrome.','Hydrostatic pulmonary edema occurs with elevated vascular pressure, not primary surfactant deficiency.'],
 takeaway:'Prematurity → low surfactant → atelectasis, low compliance, hyaline membranes.'
},
{
 id:4, topic:'Cardiology',
 stem:'A 72-year-old man has progressively worsening exertional dyspnea, chest discomfort, and syncope when climbing stairs. Cardiac examination reveals a harsh crescendo-decrescendo systolic murmur at the right upper sternal border radiating to the carotids. Echocardiography shows heavily calcified aortic leaflets.',
 prompt:'Which left ventricular structural adaptation is most likely?',
 options:['Eccentric hypertrophy with sarcomeres added in series','Right ventricular concentric hypertrophy','Concentric hypertrophy with sarcomeres added in parallel','Dilation caused by primary volume overload','Myocardial thinning caused by reduced afterload'], correct:2,
 explanations:['Series addition of sarcomeres is typical of volume overload.','The obstructed aortic valve imposes pressure load on the LEFT ventricle.','Correct. Chronic pressure overload stimulates parallel sarcomere addition and left ventricular wall thickening.','Primary dilation and eccentric hypertrophy are classically consequences of volume overload such as regurgitation.','Aortic stenosis raises rather than lowers afterload.'],
 takeaway:'Pressure overload → concentric hypertrophy; volume overload → eccentric hypertrophy.'
},
{
 id:5, topic:'Nephrology',
 stem:'A 58-year-old man with long-standing type 2 diabetes develops progressive albuminuria. His physician prescribes lisinopril to lower intraglomerular pressure and slow kidney disease progression.',
 prompt:'Which change in renal arteriolar resistance is primarily responsible for this protective effect?',
 options:['Increased afferent arteriolar resistance','Decreased efferent arteriolar resistance','Increased efferent arteriolar resistance','Equal constriction of afferent and efferent arterioles','Selective constriction of the renal artery'], correct:1,
 explanations:['Afferent constriction is not the principal action of ACE inhibition.','Correct. Less angiotensin II causes preferential efferent dilation, lowering intraglomerular hydrostatic pressure and protein filtration.','Angiotensin II causes preferential efferent constriction; this change would increase glomerular pressure.','ACE inhibitors do not cause equal constriction of both arterioles.','Renal arterial constriction would worsen renal perfusion.'],
 takeaway:'ACE inhibitors/ARBs preferentially dilate the efferent arteriole.'
},
{
 id:6, topic:'Pulmonology',
 stem:'An 11-year-old boy has episodic wheezing, chest tightness, and coughing after cat exposure. He has eczema and seasonal allergic rhinitis. Spirometry shows reversible airflow obstruction after an inhaled beta-2 agonist. Bronchial biopsy shows eosinophilic inflammation.',
 prompt:'Which cytokine most directly promotes eosinophil recruitment and activation?',
 options:['Interleukin-1','Interleukin-4','Interleukin-5','Interleukin-8','Interferon-gamma'], correct:2,
 explanations:['IL-1 promotes general inflammatory activation and fever.','IL-4 promotes Th2 differentiation and class switching to IgE, not primarily eosinophil activation.','Correct. IL-5 supports eosinophil differentiation, activation, and survival in allergic asthma.','IL-8 is a major chemotactic factor for neutrophils.','IFN-gamma promotes Th1 and macrophage-mediated responses.'],
 takeaway:'Atopic asthma: IL-4/IL-13 support IgE; IL-5 supports eosinophils.'
},
{
 id:7, topic:'Cardiology',
 stem:'During cardiac catheterization in a patient with hypertension, an agent acutely raises systemic vascular resistance. Heart rate, preload, and myocardial contractility remain unchanged.',
 prompt:'What is the immediate effect on the left ventricular pressure-volume loop?',
 options:['Increased end-systolic volume and decreased stroke volume','Decreased end-systolic volume and increased stroke volume','Increased end-diastolic volume with unchanged end-systolic volume','Decreased peak ventricular systolic pressure','Increased stroke volume with unchanged ejection fraction'], correct:0,
 explanations:['Correct. Higher afterload impedes ejection; more blood remains after systole and stroke volume falls.','This is typical of decreased afterload or increased inotropy.','Preload is held constant in the experimental setup; end-systolic volume changes.','The ventricle must generate a higher systolic pressure to eject against a higher afterload.','Stroke volume and ejection fraction decrease with an isolated acute rise in afterload.'],
 takeaway:'Higher afterload → higher ESV and lower stroke volume.'
},
{
 id:8, topic:'Nephrology',
 stem:'A 74-year-old woman with chronic kidney disease has taken high doses of ibuprofen for several weeks. After reduced oral intake during a gastrointestinal illness, she develops oliguria and worsening kidney function.',
 prompt:'Which mechanism most likely causes the additional reduction in glomerular filtration rate?',
 options:['Increased prostaglandin-mediated afferent dilation','Decreased prostaglandin synthesis causing afferent constriction','Increased angiotensin II-mediated efferent constriction','Increased nitric oxide production causing efferent dilation','Direct inhibition of the sodium-potassium-chloride cotransporter'], correct:1,
 explanations:['NSAIDs suppress rather than enhance prostaglandin synthesis.','Correct. COX inhibition removes protective afferent arteriolar dilation, especially during volume depletion.','Angiotensin II-mediated efferent constriction helps maintain glomerular pressure under low perfusion.','Efferent dilation is associated more with ACE inhibitor/ARB effects.','NKCC2 blockade is the mechanism of loop diuretics.'],
 takeaway:'NSAIDs constrict afferent arterioles; ACE inhibitors dilate efferent arterioles.'
},
{
 id:9, topic:'Pulmonology',
 stem:'A 67-year-old man with a 45-pack-year smoking history has progressive exertional dyspnea, a barrel chest, diminished breath sounds, and prolonged expiration. Pulmonary function tests reveal obstruction, increased total lung capacity, and decreased DLCO.',
 prompt:'Which pathophysiologic change best accounts for the findings?',
 options:['Increased alveolar elastic recoil','Increased pulmonary capillary surface area','Decreased pulmonary compliance','Destruction of alveolar walls and loss of elastic tissue','Increased alveolar basement membrane thickness from fibrosis'], correct:3,
 explanations:['Elastic recoil falls in emphysema, promoting airway collapse on expiration.','Alveolar septal destruction decreases capillary surface area and DLCO.','Compliance increases with loss of elastin.','Correct. Alveolar destruction causes hyperinflation, loss of recoil, obstructive physiology, and reduced DLCO.','Interstitial fibrosis yields restrictive physiology and reduced compliance.'],
 takeaway:'Emphysema: increased compliance, increased TLC, reduced elastic recoil, reduced DLCO.'
},
{
 id:10, topic:'Cardiology',
 stem:'A 59-year-old man develops sharp retrosternal chest pain 5 weeks after an acute myocardial infarction. It worsens supine and improves while leaning forward. Examination reveals a pericardial rub; ECG shows diffuse ST elevations and PR depressions.',
 prompt:'What mechanism most likely explains the condition?',
 options:['Acute coronary artery thrombosis','Bacterial invasion of the pericardium','Immune-mediated inflammation following myocardial injury','Acute rupture of the left ventricular free wall','Fibrotic fusion of the two pericardial layers'], correct:2,
 explanations:['Acute reocclusion usually causes regional ischemic ECG changes rather than a diffuse pericarditis pattern.','Purulent bacterial pericarditis is a different infectious process.','Correct. Dressler syndrome is delayed autoimmune pericarditis after myocardial injury.','Free-wall rupture leads to hemopericardium and often tamponade.','Pericardial fibrosis causes chronic constrictive physiology, not this acute inflammatory presentation.'],
 takeaway:'Delayed post-MI pericarditis (Dressler): immune-mediated, pleuritic and positional pain.'
},
{
 id:11, topic:'Nephrology',
 stem:'A 5-year-old boy develops periorbital swelling, edema of both legs, and frothy urine. Urinalysis shows heavy proteinuria without significant hematuria. Light microscopy of a kidney biopsy shows normal glomeruli; immunofluorescence is negative.',
 labs:[['Serum albumin','1.8 g/dL','3.5–5.0 g/dL'],['Total cholesterol','310 mg/dL','Desirable <200 mg/dL'],['24-hour urine protein','4.2 g','<0.15 g/24 h']],
 prompt:'Which finding is most likely on electron microscopy?',
 options:['Diffuse podocyte foot-process effacement','Subepithelial electron-dense humps','Glomerular basement membrane splitting','Linear IgG deposition along the basement membrane','Mesangial electron-dense IgA deposits'], correct:0,
 explanations:['Correct. Minimal change disease causes nephrotic syndrome with normal light microscopy, negative immunofluorescence, and diffuse foot-process effacement.','Subepithelial humps suggest poststreptococcal glomerulonephritis.','GBM splitting suggests membranoproliferative glomerulonephritis or related basement-membrane remodeling.','Linear IgG is an immunofluorescence feature of anti-GBM disease.','Mesangial IgA deposits suggest IgA nephropathy.'],
 takeaway:'Childhood nephrotic syndrome + normal light microscopy → minimal change disease.'
},
{
 id:12, topic:'Pulmonology',
 stem:'A 6-year-old girl has recurrent respiratory infections, chronic productive cough, poor weight gain, and bulky, foul-smelling stools. Sweat chloride testing is markedly elevated.',
 prompt:'Which cellular transport mechanism is primarily defective?',
 options:['Sodium-potassium ATPase in alveolar epithelial cells','Sodium-glucose cotransport in the renal proximal tubule','Aquaporin-2 insertion in collecting ducts','Calcium ATPase in bronchial smooth muscle','ATP-regulated chloride transport through an apical epithelial channel'], correct:4,
 explanations:['Na+/K+-ATPase supports gradients but is not the primary protein in cystic fibrosis.','SGLT proteins reabsorb glucose; defective SGLT does not explain lung and pancreas disease.','Aquaporin-2 controls renal water reabsorption.','Calcium ATPase controls cell calcium homeostasis, not the hallmark secretory defect.','Correct. CFTR dysfunction impairs apical chloride transport, producing dehydrated mucus and pancreatic insufficiency.'],
 takeaway:'Cystic fibrosis: CFTR chloride channel defect causes viscous secretions.'
},
{
 id:13, topic:'Cardiology',
 stem:'A 23-year-old woman presents with sudden palpitations. Her pulse is 190/min, and ECG shows regular narrow-complex tachycardia with poorly visible P waves. Carotid massage fails. Intravenous adenosine restores sinus rhythm.',
 prompt:'What is the mechanism of this medication?',
 options:['Blockade of fast sodium channels in ventricular muscle','Transient hyperpolarization and inhibition of AV nodal conduction','Inhibition of delayed-rectifier potassium channels','Increased conduction through accessory atrioventricular pathways','Irreversible blockade of beta-1 receptors'], correct:1,
 explanations:['Fast sodium-channel blockade describes class I antiarrhythmics.','Correct. A1 receptor activation increases potassium current and transiently suppresses calcium-dependent AV nodal conduction.','Potassium-channel inhibition is the principal action of many class III agents.','Adenosine transiently blocks the AV node rather than promoting accessory pathway conduction.','Beta blockers are reversible antagonists, and this is not how adenosine works.'],
 takeaway:'Adenosine transiently blocks AV nodal conduction and may terminate AVNRT/AVRT.'
},
{
 id:14, topic:'Nephrology',
 stem:'A 49-year-old man treated with lithium for 12 years has intense thirst, polyuria, and nocturia. During supervised water deprivation, the urine remains dilute despite rising plasma osmolality. Desmopressin produces minimal change in urine concentration.',
 prompt:'Which defect explains these findings?',
 options:['Impaired collecting duct responsiveness to ADH','Decreased hypothalamic synthesis of ADH','Increased adrenal aldosterone secretion','Increased proximal tubule sodium reabsorption','Excessive secretion of ADH'], correct:0,
 explanations:['Correct. Lithium can cause nephrogenic diabetes insipidus by diminishing collecting duct responses to ADH.','Central diabetes insipidus generally improves after desmopressin.','Aldosterone does not directly cause this failure of water concentration.','Proximal sodium transport is not the defining issue.','Excess ADH would produce water retention and concentrated rather than persistently dilute urine.'],
 takeaway:'No response to desmopressin → nephrogenic diabetes insipidus.'
},
{
 id:15, topic:'Pulmonology',
 stem:'A 63-year-old woman develops sudden pleuritic chest pain and shortness of breath 6 days after total hip arthroplasty. She is tachycardic and tachypneic. CT pulmonary angiography reveals a filling defect in a segmental pulmonary artery.',
 prompt:'Which ventilation-perfusion abnormality occurs in the affected lung region?',
 options:['Decreased ventilation with preserved perfusion','Complete absence of both ventilation and perfusion','Normal ventilation and normal perfusion','Increased perfusion relative to ventilation','Preserved ventilation with markedly decreased perfusion'], correct:4,
 explanations:['Ventilation loss with preserved perfusion creates low V/Q or shunt physiology.','The alveoli can remain ventilated even when their arterial blood supply is blocked.','Perfusion is disrupted by the embolus.','Increased perfusion relative to ventilation corresponds to low V/Q.','Correct. Pulmonary embolism causes alveolar dead space, with V/Q approaching infinity.'],
 takeaway:'Pulmonary embolism → ventilation without perfusion → high V/Q (dead space).'
},
{
 id:16, topic:'Cardiology',
 stem:'A 38-year-old man has exertional chest discomfort and fatigue. A systolic ejection murmur is heard at the right second intercostal space. Echocardiography reveals a calcified aortic valve with only two functional leaflets. His father required aortic valve replacement at age 45.',
 prompt:'Which condition most likely predisposed him to early valve dysfunction?',
 options:['Failure of septum primum fusion','Defective formation of the tricuspid valve','Persistence of a communication between the aorta and pulmonary artery','Congenital bicuspid aortic valve with accelerated calcific degeneration','Acquired fusion of mitral commissures following rheumatic fever'], correct:3,
 explanations:['Septum primum defects concern atrial septation.','Tricuspid valve anomalies affect the right atrioventricular valve.','Patent ductus arteriosus is a vascular connection, not a two-leaflet valve.','Correct. Congenitally bicuspid aortic valves experience abnormal flow and undergo calcification earlier than normal trileaflet valves.','Rheumatic disease can cause mitral stenosis but does not explain congenital two-leaflet aortic anatomy.'],
 takeaway:'Bicuspid aortic valves can cause premature calcific aortic stenosis.'
},
{
 id:17, topic:'Nephrology',
 stem:'A 47-year-old woman presents with edema and frothy urine. Testing demonstrates nephrotic-range proteinuria and circulating anti-phospholipase A2 receptor antibodies. Biopsy shows diffuse glomerular basement membrane thickening without marked hypercellularity.',
 prompt:'Which other biopsy finding is most likely?',
 options:['Linear IgG staining along the glomerular basement membrane','Subepithelial immune deposits with granular immunofluorescence','Mesangial IgA deposition','Diffuse crescents without immune deposits','Subendothelial deposits with a tram-track appearance'], correct:1,
 explanations:['Linear IgG staining indicates anti-GBM disease.','Correct. Primary membranous nephropathy produces subepithelial deposits and granular immunofluorescence; basement membrane spikes form between deposits.','Mesangial IgA deposition indicates IgA nephropathy.','Pauci-immune crescentic disease is typically ANCA-associated.','Tram tracks and subendothelial deposits suggest membranoproliferative glomerulonephritis.'],
 takeaway:'Anti-PLA2R membranous nephropathy → subepithelial deposits and granular staining.'
},
{
 id:18, topic:'Pulmonology',
 stem:'A 69-year-old man has progressive exertional dyspnea and dry cough. Examination reveals bibasilar fine inspiratory crackles and clubbing. High-resolution CT shows basilar subpleural honeycombing. Idiopathic pulmonary fibrosis is diagnosed.',
 prompt:'Which pulmonary function pattern is most likely?',
 options:['Increased TLC, decreased FEV1/FVC, and increased DLCO','Normal TLC, decreased FEV1/FVC, and normal DLCO','Increased RV, increased TLC, and decreased FEV1/FVC','Decreased TLC, decreased FEV1/FVC, and increased DLCO','Decreased TLC, preserved or increased FEV1/FVC, and decreased DLCO'], correct:4,
 explanations:['This is not the expected restrictive physiology.','Decreased FEV1/FVC suggests obstruction rather than pure restriction.','Hyperinflation and low FEV1/FVC are typical of obstructive disease.','Fibrosis generally preserves or increases the ratio and reduces DLCO.','Correct. Restriction lowers total lung capacity; fibrosis impairs diffusion and typically preserves or increases the FEV1/FVC ratio.'],
 takeaway:'Pulmonary fibrosis: restrictive PFTs (low TLC) and low DLCO.'
},
{
 id:19, topic:'Cardiology',
 stem:'A 19-year-old basketball player collapses during practice. His brother died suddenly at age 22. A systolic murmur is heard at the left sternal border. Echocardiography shows asymmetric septal hypertrophy and systolic anterior motion of the mitral valve.',
 prompt:'Which maneuver most likely makes the murmur louder?',
 options:['Passive leg elevation','Sustained handgrip','Standing up from a squat','Intravenous isotonic saline','Squatting from a standing position'], correct:2,
 explanations:['Leg raising increases preload and typically lessens dynamic outflow obstruction.','Handgrip increases afterload and usually reduces HOCM murmur intensity.','Correct. Standing reduces preload, shrinks the LV cavity, and intensifies obstruction in hypertrophic obstructive cardiomyopathy.','Volume loading increases LV chamber size and tends to reduce obstruction.','Squatting increases preload and afterload, tending to reduce obstruction.'],
 takeaway:'HOCM gets louder with decreased preload (standing or Valsalva).'
},
{
 id:20, topic:'Nephrology',
 stem:'A 29-year-old woman with autoimmune disease has recurrent kidney stones, fatigue, and muscle weakness.',
 labs:[['Arterial pH','7.29','7.35–7.45'],['Serum bicarbonate','16 mEq/L','22–28 mEq/L'],['Serum potassium','3.0 mEq/L','3.5–5.0 mEq/L'],['Serum anion gap','10 mEq/L','8–12 mEq/L'],['Urine pH','6.5','4.5–8.0 (inappropriately high with acidosis)']],
 prompt:'Which renal defect most likely causes these findings?',
 options:['Excess bicarbonate secretion from collecting ducts','Impaired aldosterone production with potassium retention','Defective proximal glucose reabsorption','Impaired hydrogen ion secretion by alpha-intercalated cells','Increased hydrogen ion secretion in the distal nephron'], correct:3,
 explanations:['Excess bicarbonate secretion is not the defining lesion in distal (type 1) RTA.','Aldosterone deficiency produces type 4 RTA, typically with high potassium.','Isolated glucose transport failure does not account for this urine pH and acidosis pattern.','Correct. Type 1 distal RTA impairs acidification, leading to normal-gap acidosis, low potassium, alkaline urine, and calcium phosphate stones.','More H+ secretion would help correct systemic acidosis.'],
 takeaway:'Distal/type 1 RTA: urine pH >5.5 despite metabolic acidosis; often stones and hypokalemia.'
},
{
 id:21, topic:'Pulmonology',
 stem:'A 54-year-old man has severe bacterial pneumonia and complete consolidation of the right middle lobe. Profound hypoxemia persists despite high-concentration supplemental oxygen. Blood continues to perfuse the affected alveoli, which are not adequately ventilated.',
 prompt:'What is the primary mechanism of persistent hypoxemia?',
 options:['Shunting of blood through nonventilated alveoli','Increased oxygen diffusion across the alveolar-capillary membrane','Increased alveolar dead-space ventilation','Decreased oxygen consumption by peripheral tissues','Isolated global hypoventilation without regional V/Q changes'], correct:0,
 explanations:['Correct. A true intrapulmonary shunt has perfusion without adequate ventilation (V/Q near zero); oxygen cannot fully correct the shunted blood.','Better diffusion should improve oxygenation.','Dead space is ventilation without perfusion, the opposite pattern.','Lower tissue consumption does not explain shunt physiology.','Consolidation creates a regional shunt rather than only global hypoventilation.'],
 takeaway:'Shunt: V/Q = 0, often poorly responsive to 100% oxygen.'
},
{
 id:22, topic:'Cardiology',
 stem:'A 71-year-old woman taking sotalol for atrial arrhythmia develops syncope and palpitations. ECG shows polymorphic ventricular tachycardia with QRS complexes twisting around the baseline; an earlier tracing showed QT prolongation. Appropriate resuscitation is initiated.',
 prompt:'Which drug targets the characteristic electrophysiologic mechanism of this rhythm?',
 options:['Additional sotalol','Intravenous magnesium sulfate','Intravenous verapamil','Intravenous digoxin','Oral flecainide'], correct:1,
 explanations:['Sotalol prolongs QT and may precipitate torsades; additional doses can worsen the rhythm.','Correct. IV magnesium suppresses the electrophysiologic instability associated with torsades de pointes.','Verapamil treats selected supraventricular rhythms but not torsades.','Digoxin does not treat torsades and can be proarrhythmic.','Flecainide is not appropriate therapy for torsades.'],
 takeaway:'Torsades de pointes: polymorphic VT with prolonged QT → IV magnesium; unstable patients need immediate electrical treatment.'
},
{
 id:23, topic:'Nephrology',
 stem:'A 62-year-old man hospitalized for acute decompensated heart failure receives IV furosemide. Urine output increases, dyspnea improves, and urinary calcium excretion rises.',
 prompt:'Which transporter does this drug directly inhibit?',
 options:['Sodium-chloride cotransport in early distal tubule','Epithelial sodium channels in cortical collecting duct','Sodium-glucose cotransport in proximal tubule','Sodium-potassium-2-chloride cotransport in thick ascending limb','Aquaporin-2 insertion in collecting duct'], correct:3,
 explanations:['NCC in the DCT is blocked by thiazide diuretics.','ENaC is inhibited by amiloride and triamterene.','SGLT2 is inhibited by empagliflozin and related drugs.','Correct. Loop diuretics inhibit NKCC2 and diminish the lumen-positive potential that drives paracellular calcium and magnesium reabsorption.','Water channel insertion depends on ADH, not direct action of furosemide.'],
 takeaway:'Loop diuretics block NKCC2 and increase calcium excretion.'
},
{
 id:24, topic:'Pulmonology',
 stem:'A 66-year-old heavy smoker has cough, weight loss, and confusion. CT shows a centrally located lung mass with mediastinal adenopathy. Biopsy demonstrates small cells, scant cytoplasm, nuclear molding, and granular chromatin.',
 labs:[['Serum sodium','121 mEq/L','135–145 mEq/L'],['Serum osmolality','258 mOsm/kg','275–295 mOsm/kg'],['Urine osmolality','580 mOsm/kg','50–1,200 mOsm/kg (hydration-dependent)']],
 prompt:'Which process most likely explains the electrolyte disturbance?',
 options:['Ectopic production of antidiuretic hormone','Ectopic production of parathyroid hormone-related peptide','Destruction of the posterior pituitary','Increased adrenal aldosterone synthesis','Renal resistance to antidiuretic hormone'], correct:0,
 explanations:['Correct. Small cell carcinoma can ectopically produce ADH, resulting in SIADH with hypotonic hyponatremia and inappropriately concentrated urine.','PTHrP causes hypercalcemia and is classically associated with squamous cell lung cancer.','Loss of pituitary ADH causes central diabetes insipidus and dilute urine.','Aldosterone excess favors sodium retention with hypokalemia and alkalosis.','ADH resistance produces excessive dilute urine rather than water retention.'],
 takeaway:'Small cell lung carcinoma → SIADH and possibly ectopic ACTH.'
},
{
 id:25, topic:'Cardiology',
 stem:'A 27-year-old woman with an unrepaired ventricular septal defect now has progressive dyspnea and cyanosis. She has clubbing and a loud pulmonic component of S2. Echocardiography shows severe pulmonary hypertension and right ventricular hypertrophy.',
 prompt:'What change most likely caused her cyanosis?',
 options:['Decreased pulmonary vascular resistance, increasing left-to-right shunting','Pulmonary vascular remodeling causing reversal of the original shunt','Spontaneous closure of the VSD in adulthood','Acute drop in systemic vascular resistance due to sepsis','Failed spiraling of the aorticopulmonary septum'], correct:1,
 explanations:['Lower pulmonary resistance favors left-to-right flow rather than cyanotic right-to-left flow.','Correct. Eisenmenger physiology occurs after longstanding left-to-right flow causes pulmonary vascular hypertension and eventually reverses the shunt.','Closure would eliminate rather than reverse intracardiac shunting.','Acute systemic vasodilation does not explain the decades-long remodeling process.','Failed septal spiraling causes transposition, not a late complication of VSD.'],
 takeaway:'Eisenmenger syndrome: longstanding left-to-right shunt → pulmonary hypertension → right-to-left shunt and cyanosis.'
},
{
 id:26, topic:'Nephrology',
 stem:'An 8-year-old boy has facial swelling, cola-colored urine, hypertension, and reduced urine output 2 weeks after pharyngitis. Urinalysis shows red blood cell casts.',
 labs:[['Serum creatinine','1.6 mg/dL','0.4–0.9 mg/dL (age-dependent)'],['Serum C3','48 mg/dL','90–180 mg/dL'],['Urine protein','2+','Negative']],
 prompt:'Which electron microscopy finding is most likely?',
 options:['Podocyte effacement without deposits','Amyloid fibrils with apple-green birefringence','Uniform basement membrane thickening without deposits','Subepithelial immune-complex humps','Dense linear deposits along the glomerular basement membrane'], correct:3,
 explanations:['Isolated foot-process effacement is typical of minimal change disease.','Apple-green birefringence is detected with Congo red microscopy in amyloidosis.','This finding does not explain complement-consuming immune-complex nephritis.','Correct. Poststreptococcal glomerulonephritis classically has subepithelial humps, low C3, and nephritic urine.','Anti-GBM disease produces linear IgG on immunofluorescence, not classic postinfectious humps.'],
 takeaway:'Poststreptococcal GN: delayed nephritic syndrome, low C3, subepithelial humps.'
},
{
 id:27, topic:'Pulmonology',
 stem:'A 72-year-old man with dysphagia after stroke develops fever, productive cough, and dyspnea after choking during a meal while sitting upright. Radiography shows a new right lower-lobe infiltrate.',
 prompt:'What anatomical feature best explains the location?',
 options:['Left main bronchus is shorter and more vertical','Right upper lobe always receives aspirated material','Right main bronchus is wider, shorter, and more vertical','Left lower lobe has the highest V/Q ratio','Carina directs aspirated material into the left bronchus'], correct:2,
 explanations:['The right main bronchus is typically more vertical.','Body position influences which dependent segment receives aspirated material.','Correct. Right bronchial anatomy facilitates aspiration; with the patient upright, the right lower lobe is a typical dependent site.','Regional V/Q variation is not why aspiration enters the right bronchial tree.','The left bronchus is not typically the preferred path for aspirated material.'],
 takeaway:'Aspiration most often enters the right lung; the affected segment depends on posture.'
},
{
 id:28, topic:'Cardiology',
 stem:'A 14-year-old boy has headaches and exercise-related leg fatigue. Arm blood pressures are elevated relative to leg pressures; femoral pulses are delayed. Radiography shows notching along the inferior surfaces of multiple ribs.',
 prompt:'Enlargement of which vessels causes this radiographic finding?',
 options:['Intercostal arteries','Pulmonary arteries','Coronary arteries','Internal carotid arteries','Renal arteries'], correct:0,
 explanations:['Correct. Collateral blood flow through enlarged intercostal arteries in aortic coarctation erodes inferior rib margins.','Pulmonary arteries are not positioned along rib undersurfaces.','Coronary arteries supply myocardium, not ribs.','Internal carotid arteries supply the brain.','Renal arteries are unrelated to characteristic rib notching.'],
 takeaway:'Aortic coarctation → upper-extremity hypertension, weak femoral pulses, rib notching from collaterals.'
},
{
 id:29, topic:'Nephrology',
 stem:'A 68-year-old woman with resistant hypertension has severe atherosclerotic right renal artery stenosis and a smaller right kidney. Renal vein sampling shows increased renin release from that kidney.',
 prompt:'Which local change most directly stimulates renin release?',
 options:['Increased NaCl delivery to macula densa','Increased afferent arteriolar perfusion pressure','Increased atrial natriuretic peptide','Decreased sympathetic stimulation of juxtaglomerular cells','Reduced stretch of the afferent arteriolar wall'], correct:4,
 explanations:['Increased macula densa NaCl delivery suppresses renin.','Higher renal perfusion and stretch suppress renin.','ANP generally counteracts sodium-retaining mechanisms.','Sympathetic beta-1 activity stimulates, rather than its reduction stimulates, renin release.','Correct. Juxtaglomerular baroreceptors sense reduced afferent pressure and increase renin output.'],
 takeaway:'Renin rises with low afferent stretch, low macula densa NaCl, or increased beta-1 stimulation.'
},
{
 id:30, topic:'Pulmonology',
 stem:'A 73-year-old retired shipyard worker has progressive dyspnea and dry cough after decades of insulation exposure. Chest imaging shows calcified pleural plaques and lower-zone interstitial fibrosis. Pulmonary testing indicates a restrictive defect.',
 prompt:'Which histopathologic finding most strongly supports the diagnosis?',
 options:['Caseating granulomas with acid-fast organisms','Iron-coated fibers embedded in fibrotic lung tissue','Charcot-Leyden crystals in bronchial mucus','Keratin pearls and intercellular bridges','Noncaseating granulomas along bronchovascular bundles'], correct:1,
 explanations:['Caseating granulomas with acid-fast bacilli suggest tuberculosis.','Correct. Ferruginous (asbestos) bodies are iron-protein coated fibers; with basal fibrosis and pleural plaques they support asbestosis.','Charcot-Leyden crystals indicate eosinophilic inflammation such as asthma.','Keratin pearls suggest squamous cell carcinoma.','Noncaseating bronchovascular granulomas favor sarcoidosis.'],
 takeaway:'Asbestosis: basal fibrosis, pleural plaques, ferruginous bodies.'
},
{
 id:31, topic:'Cardiology',
 stem:'A 63-year-old man develops sudden severe dyspnea, hypotension, and pulmonary edema 4 days after an inferior-wall myocardial infarction. A new holosystolic murmur is loudest at the apex and radiates to the axilla.',
 prompt:'Which mechanical complication is most likely?',
 options:['Left ventricular free-wall rupture','Interventricular septal rupture','Posteromedial papillary muscle rupture','Acute aortic stenosis','Ventricular aneurysm'], correct:2,
 explanations:['Free-wall rupture causes hemopericardium and tamponade, typically without this apical mitral regurgitation murmur.','Septal rupture often creates a harsh murmur near the lower left sternal border, sometimes with a thrill.','Correct. Ischemic posteromedial papillary muscle rupture causes acute severe mitral regurgitation, flash pulmonary edema, and shock.','Calcific aortic stenosis is not an acute post-MI mechanical event.','A true ventricular aneurysm typically forms later from scarred myocardium.'],
 takeaway:'Days after MI + acute pulmonary edema + new apical holosystolic murmur → papillary muscle rupture.'
},
{
 id:32, topic:'Nephrology',
 stem:'A 58-year-old man remains hypotensive for several days during septic shock. Urine output falls, and urinalysis reveals many muddy brown granular casts.',
 labs:[['Serum creatinine','3.4 mg/dL','0.6–1.3 mg/dL'],['Blood urea nitrogen','42 mg/dL','7–20 mg/dL'],['Fractional excretion of sodium','3.5%','Usually <1% during hypoperfusion with intact tubules']],
 prompt:'What mechanism best explains the acute kidney injury?',
 options:['Immune-complex deposition in glomeruli','Bilateral ureteral obstruction','Ischemic injury and necrosis of tubular epithelial cells','Selective loss of GBM negative charge','Antibody injury to podocyte PLA2 receptors'], correct:2,
 explanations:['Glomerulonephritis often yields red cell casts, not classic muddy brown granular casts.','Bilateral ureteral obstruction causes postrenal injury.','Correct. Prolonged ischemia damages renal tubules, reducing sodium reabsorption and producing granular casts.','Loss of glomerular charge selectivity produces proteinuria rather than the described tubular casts.','PLA2R autoantibodies cause primary membranous nephropathy.'],
 takeaway:'Ischemic acute tubular necrosis: muddy brown casts and often FeNa >2% (context-dependent).'
},
{
 id:33, topic:'Pulmonology',
 stem:'A 39-year-old man is found unconscious in a closed garage with a gasoline generator running. He is confused and complains of headache and dizziness. A standard pulse oximeter appears reassuring despite suspected tissue hypoxia.',
 labs:[['Arterial PaO₂','98 mmHg','80–100 mmHg'],['Pulse oximeter SpO₂','99%','95–100% (unreliable for carbon monoxide exposure)']],
 prompt:'Which mechanism best explains this condition?',
 options:['Carbon monoxide binding to hemoglobin, reducing oxygen carrying capacity','Decreased alveolar ventilation causing severe hypercapnia','Excess methemoglobin from iron oxidation','Acute destruction of the alveolar-capillary membrane','Massive pulmonary embolism causing alveolar dead space'], correct:0,
 explanations:['Correct. Carbon monoxide binds hemoglobin tightly, lowers oxygen content, and impairs unloading; PaO2 measures dissolved oxygen and can remain normal.','Hypoventilation is not the primary mechanism suggested by generator fumes.','Methemoglobinemia involves ferric (Fe3+) hemoglobin and often different exposures.','Alveolar-capillary membrane destruction would interfere with pulmonary diffusion rather than directly occupy hemoglobin.','Pulmonary embolism causes perfusion defects and does not match this toxic exposure.'],
 takeaway:'Carbon monoxide poisoning: normal PaO₂ does not exclude life-threatening impaired oxygen delivery.'
},
{
 id:34, topic:'Cardiology',
 stem:'A 44-year-old woman with metastatic cancer has worsening dyspnea and lightheadedness. Her blood pressure is 82/54 mmHg and pulse 128/min. Neck veins are distended and heart sounds are muffled. Echocardiography shows a large pericardial effusion and right atrial collapse.',
 prompt:'Which hemodynamic change is most likely?',
 options:['Increased LV end-diastolic volume due to enhanced filling','Decreased intrapericardial pressure','Increased stroke volume due to lower afterload','Impaired ventricular filling with near-equal cardiac diastolic pressures','Increased ventricular compliance due to expansion of the pericardium'], correct:3,
 explanations:['Cardiac tamponade compresses chambers and reduces filling.','Intrapericardial pressure rises as fluid accumulates.','Reduced ventricular filling lowers stroke volume and cardiac output.','Correct. High pericardial pressure restricts diastolic filling and tends to equalize diastolic chamber pressures.','The pericardial constraint reduces effective ventricular compliance.'],
 takeaway:'Cardiac tamponade: hypotension, JVD, muffled heart sounds, impaired filling, equalized diastolic pressures.'
},
{
 id:35, topic:'Nephrology',
 stem:'A 42-year-old man has hypertension, intermittent flank discomfort, and bilateral enlarged cystic kidneys. His mother developed end-stage kidney disease in her 50s. Genetic testing reveals a PKD1 pathogenic variant.',
 prompt:'Which associated condition is he at increased risk of developing?',
 options:['Pulmonary sequestration','Medullary thyroid carcinoma','Bilateral adrenal hyperplasia','Congenital absence of the ureters','Saccular intracranial aneurysm'], correct:4,
 explanations:['Pulmonary sequestration is a congenital lung anomaly with no classic PKD1 association.','Medullary thyroid carcinoma is associated with MEN2 and RET mutations.','Adrenal hyperplasia is not a defining ADPKD complication.','Ureteric bud failure can cause renal agenesis, rather than adult polycystic kidneys.','Correct. Autosomal dominant polycystic kidney disease increases the risk of intracranial berry aneurysms.'],
 takeaway:'ADPKD (PKD1/PKD2): renal cysts, hypertension, liver cysts, berry aneurysms.'
},
{
 id:36, topic:'Pulmonology',
 stem:'A 32-year-old man develops progressive exertional dyspnea and wheezing despite never smoking. His father developed severe lung disease when young. Testing reveals obstruction and low DLCO; CT shows diffuse lower-lobe-predominant panacinar emphysema.',
 prompt:'Which abnormality most likely causes his disease?',
 options:['Alpha-1 antitrypsin deficiency with unopposed neutrophil elastase','Mucus gland proliferation caused by tobacco smoke','Autoimmune destruction of pulmonary capillary endothelium','Defective chloride transport with recurrent airway infection','Increased type I collagen deposition in the pulmonary interstitium'], correct:0,
 explanations:['Correct. Alpha-1 antitrypsin normally inhibits neutrophil elastase; deficiency causes early panacinar emphysema, often basilar predominant.','This describes a mechanism of chronic bronchitis, usually linked to smoking.','This is not the classic cause of inherited panacinar emphysema.','CFTR dysfunction produces cystic fibrosis with bronchiectasis and pancreatic disease.','Interstitial collagen accumulation creates restriction, not panacinar emphysema.'],
 takeaway:'Alpha-1 antitrypsin deficiency → early panacinar emphysema, typically basilar.'
},
{
 id:37, topic:'Cardiology',
 stem:'A 56-year-old man without structural heart disease starts flecainide for symptomatic atrial fibrillation. ECG at follow-up shows a widened QRS interval.',
 prompt:'Which electrophysiologic action directly causes the ECG change?',
 options:['Increased inward L-type calcium current','Selective potassium channel block prolonging phase 3','Potent fast voltage-gated sodium channel blockade','Na+/K+-ATPase inhibition','Muscarinic receptor activation in the SA node'], correct:2,
 explanations:['Flecainide does not increase calcium current.','Potassium-channel block is characteristic of class III antiarrhythmics.','Correct. Class IC drugs markedly slow phase 0 upstroke in fast-response tissue, slowing conduction and widening QRS.','Na+/K+-ATPase inhibition is the mechanism of digoxin.','Vagal muscarinic effects slow nodal automaticity but are not flecainide action.'],
 takeaway:'Class IC antiarrhythmics (flecainide): strong Na+ channel block → QRS widening.'
},
{
 id:38, topic:'Nephrology',
 stem:'A 54-year-old woman with type 2 diabetes is prescribed empagliflozin. Her urinary glucose excretion rises even as blood glucose control improves.',
 prompt:'In which nephron segment does the medication primarily inhibit glucose reabsorption?',
 options:['Thick ascending limb','Early proximal convoluted tubule','Distal convoluted tubule','Cortical collecting duct','Thin descending limb'], correct:1,
 explanations:['NKCC2 is the notable transporter in the thick ascending limb.','Correct. SGLT2 in the early proximal tubule reabsorbs most filtered glucose and is inhibited by empagliflozin.','NCC is characteristic of the distal convoluted tubule.','The cortical collecting duct primarily regulates sodium, potassium, acid-base balance, and water permeability.','The descending limb is water-permeable and does not reabsorb most filtered glucose.'],
 takeaway:'SGLT2 inhibitors act in the early proximal tubule to induce glucosuria.'
},
{
 id:39, topic:'Pulmonology',
 stem:'A healthy volunteer has a tidal volume of 500 mL, respiratory rate of 12 breaths/min, and anatomic dead-space volume of 150 mL. His breathing pattern remains constant.',
 prompt:'What is his approximate alveolar ventilation per minute?',
 options:['1.8 L/min','3.0 L/min','3.6 L/min','4.2 L/min','6.0 L/min'], correct:3,
 explanations:['1.8 L/min equals dead-space ventilation: 150 mL × 12.','3.0 L/min uses the wrong effective tidal volume.','3.6 L/min underestimates alveolar tidal ventilation.','Correct. (500 − 150) mL/breath × 12 breaths/min = 4,200 mL/min = 4.2 L/min.','6.0 L/min equals total minute ventilation: 500 mL × 12.'],
 takeaway:'Alveolar ventilation = (tidal volume − dead-space volume) × respiratory rate.'
},
{
 id:40, topic:'Cardiology',
 stem:'A 60-year-old man has crushing substernal chest pain, nausea, and diaphoresis. ECG shows ST elevations in precordial leads V1–V4. Angiography demonstrates acute proximal occlusion of a major coronary artery.',
 prompt:'Which artery is most likely occluded?',
 options:['Right coronary artery','Left circumflex artery','Posterior descending artery','Obtuse marginal artery','Left anterior descending artery'], correct:4,
 explanations:['The right coronary artery often supplies inferior myocardium.','The circumflex mainly supplies lateral LV territory.','The posterior descending artery supplies inferior/posterior septal regions.','Obtuse marginal branches supply lateral LV myocardium.','Correct. The LAD supplies the anterior wall and anterior septum; V1–V4 elevations indicate anteroseptal MI.'],
 takeaway:'Anterior/anteroseptal STEMI (V1–V4) → LAD occlusion.'
},
{
 id:41, topic:'Nephrology',
 stem:'A 67-year-old man with longstanding diabetes and CKD has persistent electrolyte abnormalities without vomiting, diarrhea, or diuretic use. Further testing shows reduced aldosterone activity.',
 labs:[['Serum sodium','138 mEq/L','135–145 mEq/L'],['Serum potassium','5.9 mEq/L','3.5–5.0 mEq/L'],['Serum chloride','111 mEq/L','98–106 mEq/L'],['Serum bicarbonate','18 mEq/L','22–28 mEq/L'],['Anion gap','9 mEq/L','8–12 mEq/L']],
 prompt:'What mechanism best explains the acid-base and electrolyte pattern?',
 options:['Increased urinary potassium and hydrogen excretion','Impaired distal potassium and hydrogen excretion','Excessive proximal bicarbonate wasting with aldosterone excess','Increased NKCC2 activity','Increased ammonium excretion'], correct:1,
 explanations:['More K+ and H+ excretion favors hypokalemia and alkalosis, not this pattern.','Correct. Type 4 RTA due to reduced aldosterone activity decreases potassium secretion; hyperkalemia also suppresses renal ammonium production, reducing net acid excretion.','Proximal bicarbonate wasting suggests type 2 RTA, usually without this hyperkalemia from low aldosterone.','Thick ascending limb NKCC2 activity does not explain type 4 RTA.','Ammonium excretion is impaired, not elevated, in type 4 RTA.'],
 takeaway:'Type 4 RTA: hyperkalemic normal-anion-gap metabolic acidosis, often diabetic hypoaldosteronism.'
},
{
 id:42, topic:'Pulmonology',
 stem:'A 46-year-old man develops severe sepsis and, four days into hospitalization, acute hypoxemic respiratory failure with diffuse bilateral pulmonary opacities. Echocardiography shows preserved left ventricular systolic function.',
 prompt:'Which histologic change is most likely?',
 options:['Diffuse alveolar damage with hyaline membranes','Bronchial smooth muscle hypertrophy and eosinophils','Noncaseating pulmonary granulomas','Extensive centriacinar alveolar destruction','Hemosiderin-laden macrophages from chronic venous congestion'], correct:0,
 explanations:['Correct. ARDS causes inflammatory alveolar-capillary barrier injury, protein-rich edema, and diffuse alveolar damage with hyaline membranes.','This describes remodeling in asthma.','Granulomas are characteristic of disorders such as sarcoidosis, not typical ARDS.','Centriacinar emphysema is associated with smoking.','Chronic pulmonary venous congestion, often from left heart failure, produces hemosiderin-laden macrophages.'],
 takeaway:'ARDS: noncardiogenic permeability edema and diffuse alveolar damage with hyaline membranes.'
},
{
 id:43, topic:'Cardiology',
 stem:'A 70-year-old man develops hypotension, confusion, cold extremities, jugular venous distension, and crackles after a large myocardial infarction. A pulmonary artery catheter is placed.',
 prompt:'Which hemodynamic profile best matches his shock?',
 options:['High cardiac output, low SVR, low pulmonary wedge pressure','Low cardiac output, low SVR, low pulmonary wedge pressure','Low cardiac output, high SVR, high pulmonary wedge pressure','High cardiac output, high SVR, high pulmonary wedge pressure','Normal cardiac output, low SVR, high pulmonary wedge pressure'], correct:2,
 explanations:['High-output, low-resistance physiology is more typical of distributive shock.','Low SVR is not the classic response in isolated cardiogenic shock.','Correct. LV pump failure lowers cardiac output, reflex vasoconstriction increases SVR, and LV congestion elevates PCWP.','Cardiac output decreases rather than rises after a severe infarction with pump failure.','Normal output with low SVR does not fit the described cool, congested cardiogenic shock.'],
 takeaway:'Cardiogenic shock: ↓CO, ↑SVR, ↑PCWP (when due to LV failure).'
},
{
 id:44, topic:'Nephrology',
 stem:'A 46-year-old woman has resistant hypertension, weakness, and a unilateral adrenal cortical adenoma. Plasma renin activity is suppressed and aldosterone is elevated.',
 labs:[['Serum potassium','2.9 mEq/L','3.5–5.0 mEq/L'],['Serum bicarbonate','32 mEq/L','22–28 mEq/L']],
 prompt:'What mechanism best explains the syndrome?',
 options:['Reduced sodium reabsorption in the collecting duct','Increased renin causing secondary hyperaldosteronism','Decreased ENaC activity','Reduced hydrogen ion secretion by alpha-intercalated cells','Autonomous aldosterone secretion increasing sodium retention and K+/H+ excretion'], correct:4,
 explanations:['Reduced sodium reabsorption would not produce aldosterone-mediated volume expansion.','Suppressed renin supports primary rather than secondary aldosterone excess.','ENaC activity rises rather than falls under aldosterone stimulation.','Aldosterone increases H+ secretion and therefore favors alkalosis.','Correct. Primary hyperaldosteronism stimulates sodium reabsorption and potassium and hydrogen secretion, causing hypertension, hypokalemia, and alkalosis.'],
 takeaway:'Conn syndrome: high aldosterone, low renin, hypertension, hypokalemic metabolic alkalosis.'
},
{
 id:45, topic:'Pulmonology',
 stem:'A 65-year-old man with severe COPD develops leg edema, abdominal distension, and fatigue. Examination shows JVD, hepatomegaly, and a prominent pulmonic component of S2. Echocardiography reveals pulmonary hypertension and right ventricular hypertrophy.',
 prompt:'What is the major mechanism of pulmonary hypertension?',
 options:['Systemic arteriolar dilation due to hypercapnia','Pulmonary venous obstruction by mucus','Chronic hypoxic pulmonary arteriolar vasoconstriction and remodeling','Increased LV contractility causing congestion','Reduced pulmonary vascular resistance in poorly ventilated regions'], correct:2,
 explanations:['Systemic arteriolar tone is not the primary mechanism of COPD-related pulmonary hypertension.','Mucus blocks airways rather than physically occluding pulmonary veins.','Correct. Chronic alveolar hypoxia drives pulmonary vasoconstriction and vascular remodeling, eventually causing cor pulmonale.','Increased LV contractility is not the driver of chronic hypoxic pulmonary vascular disease.','Hypoxic pulmonary vasoconstriction raises, not reduces, regional pulmonary vascular resistance.'],
 takeaway:'COPD-associated cor pulmonale: chronic alveolar hypoxia → pulmonary hypertension → RV failure.'
}
];
