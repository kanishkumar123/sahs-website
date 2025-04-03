import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./CourseDetails.css";

const courses = {
  UG: [
    {
      name: "B.Sc. Accident and Emergency Care Technology",
      duration: "3 + 1 Year Internship",
      eligibility:
        "A Pass in 10+2 / H.Sc. or its equivalent examination with subjects of Physics, Chemistry, & Biology (Botany & Zoology).",
      overview:
        "The Accident and Emergency Care Technology course is a four years course (3 Years + 1 year internship) which trains candidates in Emergency Medical techniques to become the first responders to all kind of medical emergencies. They are taught knowledge and skills to save the patients with various medical emergencies, within and outside the hospital. Training experience is predominantly in the department of Accident and Emergency Medicine.",
      career:
        "Candidates can work in Government / Private Trauma Centers, Emergency Departments in Multispecialty Hospitals, Ortho Specialty Centers, Surgical Emergency Area, Paediatric Trauma Centers, and Trauma Ambulance Services.",
      po: [
        "PO1: Identify common disease-producing microorganisms; Explain the basic principles of microbiology and their significance in health and disease.",
        "PO2: Understand the basic principles of nursing to meet the health needs of individuals, family, and community.",
        "PO3: Identify drugs used in ICU and describe their pharmacology, route of administration, uses, and adverse effects.",
        "PO4: Recognize major abdominal illness and trauma, and avoid delay in resuscitation.",
        "PO5: Focus on trauma, from minor injury to humanitarian emergencies.",
        "PO6: Assess physical changes in childbearing women and recognize injuries during pregnancy.",
        "PO7: Complete patient physical examination for evaluation of traumatic injuries and surgical emergencies.",
        "PO8: Perform trauma/general surgery evaluation with the FAST ultrasound.",
        "PO9: Cardiac patient access with ECHO cardiogram.",
        "PO10: BLS & ACLS common emergency and first aid management.",
        "PO11: Make judgments about when to administer first aid, and when to call for help.",
        "PO12: Implement emergency procedure correctly.",
      ],
    },
    {
      name: "B.Sc. Cardiac Technology",
      duration: "3 + 1 Year Internship",
      eligibility:
        "A Pass in 10+2 / H.Sc. or its equivalent examination with subjects of Physics, Chemistry, & Biology (Botany & Zoology).",
      overview:
        "Cardiac technology is an area of specialization for Allied Health professionals. Cardiovascular technologists assist physicians in the diagnosis and treatment of cardiac and peripheral vascular conditions. Students are trained to diagnose and examine heart chambers, valves, and vessels using cardiac ultrasound equipment and electrocardiograms.",
      career:
        "Graduates can work in Hospitals, Cardiology Departments, Cardiac Rehabilitation Centres, Medical Manufacturing Companies, and Educational Institutions as Cardiovascular Technologists, Cardiac Sonographers, and Electrophysiology specialists.",
      po: [
        "PO1: Assist physicians in the diagnosis and treatment of cardiac and peripheral vascular conditions.",
        "PO2: Prepare patients for open-heart surgery and pacemaker implantation.",
        "PO3: Assist physicians with patient monitoring during surgery or procedures.",
        "PO4: Document evaluation results, progress reports, treatment plans, and other data using appropriate formats and systems.",
      ],
    },
    {
      name: "B.Sc. Emergency Medical Care Technology",
      duration: "3 + 1 Year Internship",
      eligibility:
        "A Pass in 10+2 / H.Sc. or its equivalent examination with subjects of Physics, Chemistry, & Biology (Botany & Zoology).",
      overview:
        "Emergency Medical Care Technology provides support for critically ill patients in pre-hospital and hospital settings. These professionals are trained to monitor equipment, administer first aid, and assist physicians during emergencies. They are also skilled in advanced life support, trauma care, and cardiac resuscitation techniques.",
      career:
        "Graduates can work in Emergency Departments, Trauma Centers, Ambulance Services, and various health care settings as Emergency Medical Technologists or in roles requiring life-saving techniques.",
      po: [
        "PO1: Assess, diagnose, and prioritize emergency conditions using evidence-based protocols and perform necessary life-saving interventions.",
        "PO2: Demonstrate expertise in performing ALS, BLS, airway management, trauma care, and cardiac resuscitation techniques.",
        "PO3: Gain hands-on experience with Emergency Medical Equipment.",
        "PO4: Develop rapid decision-making skills to handle emergency scenarios effectively.",
        "PO5: Enhance interpersonal and communication skills for effective coordination in critical situations.",
        "PO6: Adopt ethical practices, legal compliance, and patient confidentiality in health care settings.",
        "PO7: Encourage the use of scientific research to improve emergency care protocols and patient safety.",
        "PO8: Develop leadership skills to manage disaster response and emergency medical services.",
        "PO9: Commit to continuous professional development and keep up with new technologies and trends in emergency medical care.",
      ],
    },
    {
      name: "B.Sc. Forensic Science Technology",
      duration: "3 + 1 Year Internship",
      eligibility:
        "A Pass in 10+2 / H.Sc. or its equivalent examination with subjects of Physics, Chemistry & Biology (Botany & Zoology) or Mathematics.",
      overview:
        "Forensic Science Technology applies scientific principles to solve crimes. It includes training in crime scene investigation, evidence collection, forensic pathology, and psychological analysis. Students are trained in both theoretical and practical aspects of forensic science.",
      career:
        "Graduates can pursue careers in crime investigation, law enforcement, cyber security, government departments, and educational institutions as forensic scientists or forensic laboratory technicians.",
      po: [
        "PO1: Demonstrate competency in the collection, processing, analysis, and evaluation of evidence.",
        "PO2: Understand the role of forensic science within the criminal justice system.",
        "PO3: Use the scientific method for solving problems in forensic science.",
        "PO4: Demonstrate competency in crime scene investigation, including evidence recognition and preservation.",
        "PO5: Document and describe crime scenes and evidence accurately.",
        "PO6: Identify current and emerging trends in forensic science.",
        "PO7: Handle forensic laboratory methodologies for examining evidence.",
        "PO8: Develop written communication skills for presenting findings.",
        "PO9: Develop oral communication skills for discussing scientific findings and testifying in court.",
        "PO10: Procure accreditation and certification in forensic science communities.",
        "PO11: Interact with law enforcement and legal professionals in the forensic process.",
        "PO12: Maintain professionalism and ethical behavior in the forensic science field.",
      ],
    },
    {
      name: "B.Sc. Medical Lab Technology",
      duration: "3 + 1 Year Internship",
      eligibility:
        "A Pass in 10+2 / H.Sc. or its equivalent examination with subjects of Physics, Chemistry, & Biology (Botany & Zoology).",
      overview:
        "Medical Lab Technology involves training in laboratory procedures, equipment operation, and diagnostic testing. Students gain practical knowledge and skills in various aspects of laboratory medicine.",
      career:
        "Graduates can work in Hospitals, Pharmaceutical Laboratories, Public Health Laboratories, Research & Development, and as Supervisors or Consultants in the laboratory medicine industry.",
      po: [
        "PO1: Perform routine clinical laboratory procedures in Haematology, Chemistry, Immunohematology, and Microbiology.",
        "PO2: Demonstrate technical skills and professionalism in the laboratory.",
        "PO3: Operate and maintain laboratory equipment, following safety procedures.",
        "PO4: Follow ethical guidelines in laboratory practices.",
        "PO5: Stay updated with new knowledge and techniques in laboratory medicine.",
      ],
    },
    {
      name: "B.Sc. Neuro Science Technology",
      duration: "3 + 1 Year Internship",
      eligibility:
        "A Pass in 10+2 / H.Sc. or its equivalent examination with subjects of Physics, Chemistry, & Biology (Botany & Zoology).",
      overview:
        "Neuro Science Technology focuses on understanding the human central nervous system. Students gain knowledge in various aspects of neurology and learn how to assist with diagnostic procedures and neurotechnology products.",
      career:
        "Graduates can work in Neuro Centers, Hospitals, Clinics, Rehabilitation Centers, or specialize further in Neurology or Neurophysiology.",
      po: [
        "PO1: Perform diagnostic procedures such as EEG, evoked potentials, and nerve conduction studies.",
        "PO2: Interpret diagnostic results and discuss with the concerned neuro physician.",
        "PO3: Assist with EMG-guided injections under supervision.",
        "PO4: Understand and design neurotechnology products.",
        "PO5: Analyze and work on neurotechnology prototypes and products.",
        "PO6: Recognize the role of neurotechnology in healthcare and function effectively in multidisciplinary teams.",
        "PO7: Develop professional and ethical skills in healthcare.",
        "PO8: Work as a lecturer in life sciences programs.",
        "PO9: Understand machine settings and parameters for neurological tests.",
      ],
    },
  ],
  PG: [
    {
      name: "M.Sc. Anaesthesia Technology",
      duration: "2 Years",
      eligibility:
        "Candidates should have passed in B.Sc. in Anaesthesia Technology / Operation Theatre Technology (or) its equivalent qualification of any University recognized by the UGC.",
      overview:
        "M.Sc. in Anaesthesia Technology is a two-year course divided into four semesters. The course offers various theory subjects and practical knowledge such as research projects/seminars/case studies/dissertations and clinical internships.",
      career:
        "Post Graduates holding this degree have immense scope to work as assistants in operation theatres in Corporate Hospitals, Medical Colleges. They can also be employed in teaching professions in India and Abroad.",
      po: [
        "Demonstrate the ability to evaluate, plan, administer Anaesthesia and provide post-operative care including pain relief and become a highly competent anaesthesiologist.",
        "Demonstrate knowledge to carry out basic life support (BLS) and advanced life support (ACLS) and train medical and paramedical staff in BLS and ACLS.",
        "Manage critically ill patients in the intensive care unit (ICU).",
        "Knowledge of pain management in patients with acute and chronic pain.",
        "Understand normal and abnormal human structure, function from a molecular, cellular, and biological perspective applied to Anaesthesia.",
        "Develop competence in teaching medical/paramedical students.",
        "Develop communication skills for effective interaction with colleagues, patients, and relatives.",
        "Demonstrate record-keeping, anaesthesia audits, and medico-legal aspects in Anaesthesia.",
        "Understand research methodology and clinical trials.",
        "Review and acquire knowledge from journals, learning advances in Anaesthesiology.",
      ],
    },
    {
      name: "M.Sc. Accident and Emergency Care Technology",
      duration: "2 Years",
      eligibility:
        "Candidate should have passed in B.Sc. relevant field / B.Sc. in Anaesthesia Technology / B.Sc. Physician Assistant / BPT / B.Sc. Nursing (or) its equivalent qualification of any recognized University.",
      overview:
        "M.Sc. Accident and Emergency Care Technology is a 2-year course that trains candidates in pre-hospital transport, emergency care, trauma management, and more. The program covers emergency medical services (EMS) systems, infectious disease outbreaks, and geriatric emergencies.",
      career:
        "Graduates can work as EMTs in government and private hospitals, trauma centers, and EMS services, as well as in air ambulances, wilderness response, and teaching roles.",
      po: [
        "Assist patients in diagnostic and therapeutic work and perform life-saving procedures.",
        "Well-trained in patient care and ambulance transportation, including performing advanced procedures.",
        "Contribute to clinical research and documentation, maintaining a logbook of cases.",
        "Write clinical records, investigation charts, and aid in research development.",
        "Understand nursing principles to meet the health needs of individuals and communities.",
        "Knowledge of trauma, injury management, and emergency response in diverse settings.",
        "Perform trauma and surgical evaluations, including ultrasound techniques like FAST and ECHO.",
        "Provide emergency management for injuries related to trauma, obstetrics, and pediatric cases.",
        "Understand and perform basic and advanced emergency care, including BLS, ACLS, and NTLS.",
        "Handle ambulance and air ambulance transport for critically ill patients in pre-hospital settings.",
      ],
    },
    {
      name: "M.Sc. Advanced Care Paramedic",
      duration: "2 Years",
      eligibility:
        "Candidate should have passed in B.Sc. in relevant field / BPT / B.Sc. Nursing Degree (or) its equivalent qualification of any recognized University.",
      overview:
        "The M.Sc. Advanced Care Paramedic program is designed to advance the careers of paramedics by improving clinical skills, decision-making, leadership, and healthcare contributions in emergency situations.",
      career:
        "Graduates can work in government/private trauma centers, emergency departments, surgical specialties, pediatric trauma centers, and trauma ambulance services, with ample demand internationally.",
      po: [
        "Demonstrate advanced knowledge and critical care management for emergency patients.",
        "Provide advanced life support, including cardiac life support and pediatric care.",
        "Manage specialized care in trauma, neurocritical care, and obstetric emergencies.",
        "Apply evidence-based practice and critical thinking in paramedicine.",
        "Teach and mentor students in paramedicine programs.",
        "Manage healthcare teams and paramedic services.",
        "Handle complex patient situations, including multiple trauma and hazardous material incidents.",
        "Coordinate emergency response efforts and develop emergency management plans.",
      ],
    },
    {
      name: "M.Sc. Cardiac Cath and Interventional Technology",
      duration: "2 Years",
      eligibility:
        "Candidate should have passed in B.Sc. Cardiac Technology / Perfusion Technology / Physician Assistant / B.Sc. Life Sciences (or) its equivalent qualification of any recognized University.",
      overview:
        "M.Sc. Cardiac Cath and Interventional Technology trains students in performing diagnostic and interventional cardiac procedures, including angiograms, hemodynamic assessments, and tissue biopsies.",
      career:
        "Graduates can work in cardiac care units, cath labs, hospitals, or as part of research teams or medical device companies. They can also pursue certifications like Registered Cardiac Electrophysiology Specialist (RCE).",
      po: [
        "Perform diagnostic and interventional cardiac catheterizations and related procedures.",
        "Assist physicians in patient monitoring during procedures.",
        "Document evaluation results, progress reports, and treatment plans.",
        "Eligible to enroll in certifications like RCE, RCIS, and Advanced Cardiac Life Support (ACLS).",
      ],
    },
    {
      name: "M.Sc. Echocardiography",
      duration: "2 Years",
      eligibility:
        "Candidate should have passed in B.Sc. Cardiac Technology / Perfusion Technology / Physician Assistant (or) its equivalent qualification of any recognized University.",
      overview:
        "M.Sc. Echocardiography trains students in performing echocardiography and heart scanning, to evaluate aspects like chamber size, valve functions, and blood flow in various heart disease conditions.",
      career:
        "Graduates can work in hospitals, educational institutions, medical manufacturing companies, and industrial medical facilities as cardiac sonographers.",
      po: [
        "Perform echocardiography to assess ischemic heart disease, valvular heart diseases, and pediatric echocardiography.",
        "Use ultrasound and ECG machines to generate reports and assist physicians during procedures.",
        "Operate echocardiography equipment to evaluate the heart's structure and function.",
        "Assist with neonatal and pediatric sonography for heart conditions.",
        "Perform error analysis and ensure the accuracy of diagnostic imaging.",
      ],
    },
  ],
};

const CourseDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Function to get tab from URL (normalized to uppercase)
  const getTabFromURL = (location) => {
    const queryParams = new URLSearchParams(location.search);
    return queryParams.get("tab")?.toUpperCase() || "UG"; // Normalize case
  };

  const [activeTab, setActiveTab] = useState(getTabFromURL(location));
  const [selectedCourse, setSelectedCourse] = useState(courses[activeTab][0]);

  useEffect(() => {
    const tabFromURL = getTabFromURL(location);
    setActiveTab(tabFromURL);
    setSelectedCourse(courses[tabFromURL][0]);
  }, [location]); // Include location in the dependency array

  const handleTabChange = (tab) => {
    const normalizedTab = tab.toUpperCase(); // Normalize to uppercase
    setActiveTab(normalizedTab);
    setSelectedCourse(courses[normalizedTab][0]);
    navigate(`?tab=${normalizedTab}`, { replace: true }); // Update URL
  };

  return (
    <div className="course-details-container">
      <h2 className="title">Course Details</h2>

      {/* Tabs */}
      <div className="course-tabs" data-active={activeTab}>
        <div
          className={`course-tab ${activeTab === "UG" ? "active" : ""}`}
          onClick={() => handleTabChange("UG")}
        >
          Undergraduate (UG)
        </div>
        <div
          className={`course-tab ${activeTab === "PG" ? "active" : ""}`}
          onClick={() => handleTabChange("PG")}
        >
          Postgraduate (PG)
        </div>
      </div>

      {/* Course Dropdown */}
      {courses[activeTab].length > 0 && (
        <select
          className="course-dropdown"
          value={selectedCourse.name}
          onChange={(e) => {
            const course = courses[activeTab].find(
              (c) => c.name === e.target.value
            );
            setSelectedCourse(course);
          }}
        >
          {courses[activeTab].map((course, index) => (
            <option key={index} value={course.name}>
              {course.name}
            </option>
          ))}
        </select>
      )}

      {/* Course Details */}
      {selectedCourse && (
        <div className="course-details">
          <h2>{selectedCourse.name}</h2>
          <p>
            <strong>Duration:</strong> {selectedCourse.duration}
          </p>
          <p>
            <strong>Eligibility:</strong> {selectedCourse.eligibility}
          </p>
          <p>
            <strong>Overview:</strong> {selectedCourse.overview}
          </p>
          <p>
            <strong>Career Prospects:</strong> {selectedCourse.career}
          </p>
          <div className="program-outcomes">
            <h3>Programme Outcomes (POs):</h3>
            <ul>
              {selectedCourse.po.map((po, index) => (
                <li key={index}>{po}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseDetails;
