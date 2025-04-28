import React from "react";

import ProfileSection from "../Components/ProfileSection";

const ProChancellorProfile = () => {
  return (
    <ProfileSection
      title="Meet Our Pro Chancellor"
      subtitle="Visionary leadership guiding our academic excellence"
      image="/ProChancellor.png"
      name="Dato' Seri. Dr.S.Sharavanan"
      roles={[
        "Pro Chancellor - Vinayaka Mission’s Research Foundation",
        // "Managing Director - Vinayaka Medical Care Centre Pvt. Ltd",
      ]}
      points={[
        "Dr. Sharavanan Shanmugasundaram born in Salem, Tamilnadu in 1967, completed his high school studies in Holy Cross Matriculation School. He then pursued his passion of becoming a Medical Specialist in the field of Radiology.",
        "He completed his basic degree in Medicine (Bachelors of Medicine, Bachelors of Surgery, MBBS) at Mangalore University, Karnataka and his postgraduate Masters studies in Radiology (MD Radiology) at Bangalore University, Karnataka.",
        "Having achieved his academic goals, he embarked on his career goal which is to be a leading entrepreneur in the field of education. He chose the field of education as it is the field where entrepreneurship and service to mankind is done simultaneously.",
        "Dr. Sharavanan is the Chairman of the Thirumuruga Kirupananda Variyar Thavathiru Sundara Swamigal Medical Educational and Charitable Trust and the Trustee of Vinayaka Mission’s Research Foundation Trust. He served as the First Vice-Chancellor of the Vinayaka Mission’s Research Foundation (Deemed to be University).",
      ]}
    />
  );
};

export default ProChancellorProfile;
