# Sanity Studio Content Template - All Phases

Complete guide for adding content to Sanity Studio. Create documents in the order listed below.

---

## PHASE 1: HOME PAGE

### 1. welcomeSection (Create 1 document)

```json
{
  "_type": "welcomeSection",
  "label": "Welcome to Sree Saraswathy Academy",
  "heading": "Where Excellence Meets Character",
  "paragraphs": [
    "Sree Saraswathy Academy is committed to nurturing young minds with academic excellence and strong moral values.",
    "Our holistic approach to education combines rigorous academics with character development, sports, and cultural activities.",
    "We believe in creating leaders who contribute positively to society while maintaining integrity and compassion."
  ],
  "isActive": true
}
```

### 2. schoolStats (Create 3 documents)

**Document 1:**
```json
{
  "_type": "schoolStats",
  "value": "25+",
  "label": "Years of Excellence",
  "order": 1
}
```

**Document 2:**
```json
{
  "_type": "schoolStats",
  "value": "2500+",
  "label": "Active Students",
  "order": 2
}
```

**Document 3:**
```json
{
  "_type": "schoolStats",
  "value": "150+",
  "label": "Dedicated Staff",
  "order": 3
}
```

---

## PHASE 2: ABOUT PAGE

### 1. aboutPageContent (Create 1 document)

```json
{
  "_type": "aboutPageContent",
  "coreValues": [
    {
      "title": "Excellence",
      "description": "We strive for the highest standards in academics, sports, and character development, ensuring every student achieves their full potential."
    },
    {
      "title": "Integrity",
      "description": "We believe in honesty, transparency, and ethical conduct in all our dealings, fostering trust and respect in our community."
    },
    {
      "title": "Inclusivity",
      "description": "We celebrate diversity and ensure every student feels valued, heard, and supported in our welcoming environment."
    },
    {
      "title": "Innovation",
      "description": "We embrace progressive teaching methods and modern technology to prepare students for tomorrow's challenges."
    }
  ],
  "visionTitle": "Leading the Future of Education",
  "visionContent": "To be a leading institution that nurtures academically excellent, morally strong, and socially responsible individuals who contribute positively to society and shape the future with innovation and integrity.",
  "missionTitle": "Empowering Every Student",
  "missionContent": "To provide comprehensive education that blends academic rigor with character development, empowering students to think critically, act responsibly, and inspire others through exemplary conduct and achievement."
}
```

### 2. principalMessage (Create 1 document)

```json
{
  "_type": "principalMessage",
  "principalName": "Dr. A. Miruthula",
  "principalQuote": "Education is not just about acquiring knowledge; it's about transforming lives.",
  "principalMessage": "At Sree Saraswathy Academy, we believe in creating an environment where every student is valued and empowered to reach their full potential. Our dedicated team works tirelessly to ensure that education transcends the classroom and prepares students for real-world challenges. With best-in-class facilities, innovative teaching methods, and a commitment to holistic development, we are proud to be a beacon of excellence in education.",
  "principalPhoto": {
    "_type": "image",
    "asset": {
      "_ref": "image-UPLOAD_PRINCIPAL_PHOTO_HERE",
      "_type": "reference"
    }
  }
}
```

### 3. managementTeamMember (Create 3 documents)

**Document 1:**
```json
{
  "_type": "managementTeamMember",
  "name": "Mr. Rajesh Kumar",
  "role": "vice_principal",
  "order": 1,
  "photo": {
    "_type": "image",
    "asset": {
      "_ref": "image-UPLOAD_VICE_PRINCIPAL_PHOTO",
      "_type": "reference"
    }
  }
}
```

**Document 2:**
```json
{
  "_type": "managementTeamMember",
  "name": "Ms. Priya Sharma",
  "role": "academic_head",
  "order": 2,
  "photo": {
    "_type": "image",
    "asset": {
      "_ref": "image-UPLOAD_ACADEMIC_HEAD_PHOTO",
      "_type": "reference"
    }
  }
}
```

**Document 3:**
```json
{
  "_type": "managementTeamMember",
  "name": "Mr. Vikram Singh",
  "role": "admin_head",
  "order": 3,
  "photo": {
    "_type": "image",
    "asset": {
      "_ref": "image-UPLOAD_ADMIN_HEAD_PHOTO",
      "_type": "reference"
    }
  }
}
```

---

## PHASE 3: ADMISSIONS PAGE

### 1. admissionClassInfo (Create 3 documents)

**Document 1:**
```json
{
  "_type": "admissionClassInfo",
  "grade": "Primary (Class I-V)",
  "criteria": "Age-appropriate admission based on DoB. Interview with parents.",
  "order": 1
}
```

**Document 2:**
```json
{
  "_type": "admissionClassInfo",
  "grade": "Upper Primary (Class VI-VIII)",
  "criteria": "Entrance assessment and interview. Previous academics considered.",
  "order": 2
}
```

**Document 3:**
```json
{
  "_type": "admissionClassInfo",
  "grade": "Secondary (Class IX-X)",
  "criteria": "Entrance exam and interview. Merit-based selection.",
  "order": 3
}
```

### 2. admissionProcessStep (Create 4 documents)

**Document 1:**
```json
{
  "_type": "admissionProcessStep",
  "step": 1,
  "title": "Apply",
  "description": "Submit online application with required documents."
}
```

**Document 2:**
```json
{
  "_type": "admissionProcessStep",
  "step": 2,
  "title": "Review",
  "description": "Application review and preliminary assessment."
}
```

**Document 3:**
```json
{
  "_type": "admissionProcessStep",
  "step": 3,
  "title": "Interview",
  "description": "Student and parent interview with faculty."
}
```

**Document 4:**
```json
{
  "_type": "admissionProcessStep",
  "step": 4,
  "title": "Confirm",
  "description": "Result notification and admission confirmation."
}
```

### 3. admissionImportantDate (Create 6 documents)

**Document 1:**
```json
{
  "_type": "admissionImportantDate",
  "event": "Application Window Opens",
  "date": "2026-05-01",
  "order": 1
}
```

**Document 2:**
```json
{
  "_type": "admissionImportantDate",
  "event": "Application Deadline",
  "date": "2026-06-15",
  "order": 2
}
```

**Document 3:**
```json
{
  "_type": "admissionImportantDate",
  "event": "Entrance Exam",
  "date": "2026-07-10",
  "order": 3
}
```

**Document 4:**
```json
{
  "_type": "admissionImportantDate",
  "event": "Interview Rounds",
  "date": "2026-07-20",
  "order": 4
}
```

**Document 5:**
```json
{
  "_type": "admissionImportantDate",
  "event": "Results Announced",
  "date": "2026-08-01",
  "order": 5
}
```

**Document 6:**
```json
{
  "_type": "admissionImportantDate",
  "event": "Session Begins",
  "date": "2026-08-15",
  "order": 6
}
```

---

## PHASE 4: COMPLIANCE PAGE

### 1. schoolInformation (Create 1 document)

```json
{
  "_type": "schoolInformation",
  "schoolName": "Sree Saraswathy Academy",
  "principalName": "Dr. A. Miruthula",
  "contactPhone": "+91 XXXXXXXXXX",
  "email": "info@saiaca.in",
  "address": "Main Branch Address, City, State - PIN Code",
  "establishedYear": 1999,
  "board": "Matriculation"
}
```

### 2. requiredDocument (Create 7 documents)

**Document 1:**
```json
{
  "_type": "requiredDocument",
  "name": "Affiliation Certificate",
  "description": "Matriculation affiliation certificate for Sree Saraswathy Academy",
  "file": {
    "asset": {
      "_ref": "file-UPLOAD_AFFILIATION_PDF",
      "_type": "reference"
    }
  },
  "order": 1
}
```

**Document 2:**
```json
{
  "_type": "requiredDocument",
  "name": "Fire Safety Certificate",
  "description": "Fire safety compliance and evacuation procedures",
  "file": {
    "asset": {
      "_ref": "file-UPLOAD_FIRE_SAFETY_PDF",
      "_type": "reference"
    }
  },
  "order": 2
}
```

**Document 3:**
```json
{
  "_type": "requiredDocument",
  "name": "Building Safety Certificate",
  "description": "Structural safety and building compliance certificate",
  "file": {
    "asset": {
      "_ref": "file-UPLOAD_BUILDING_SAFETY_PDF",
      "_type": "reference"
    }
  },
  "order": 3
}
```

**Document 4:**
```json
{
  "_type": "requiredDocument",
  "name": "Water & Sanitation Report",
  "description": "Water quality and sanitation facility details",
  "file": {
    "asset": {
      "_ref": "file-UPLOAD_WATER_SANITATION_PDF",
      "_type": "reference"
    }
  },
  "order": 4
}
```

**Document 5:**
```json
{
  "_type": "requiredDocument",
  "name": "DEO Certificate",
  "description": "District Education Officer recognition",
  "file": {
    "asset": {
      "_ref": "file-UPLOAD_DEO_PDF",
      "_type": "reference"
    }
  },
  "order": 5
}
```

**Document 6:**
```json
{
  "_type": "requiredDocument",
  "name": "Land Certificate",
  "description": "Land ownership and utilization certificate",
  "file": {
    "asset": {
      "_ref": "file-UPLOAD_LAND_PDF",
      "_type": "reference"
    }
  },
  "order": 6
}
```

**Document 7:**
```json
{
  "_type": "requiredDocument",
  "name": "Fee Structure",
  "description": "Detailed fee structure for all classes",
  "file": {
    "asset": {
      "_ref": "file-UPLOAD_FEE_STRUCTURE_PDF",
      "_type": "reference"
    }
  },
  "order": 7
}
```

### 3. additionalInformationSection (Create 5 documents)

**Document 1:**
```json
{
  "_type": "additionalInformationSection",
  "title": "Facilities",
  "content": "Sree Saraswathy Academy is equipped with state-of-the-art facilities including laboratories, library, sports grounds, medical facilities, and transportation services at all campuses.",
  "order": 1
}
```

**Document 2:**
```json
{
  "_type": "additionalInformationSection",
  "title": "Curriculum",
  "content": "The school follows Matriculation curriculum with a focus on experiential learning, critical thinking, and holistic development. Special emphasis is given to co-curricular activities and skill development.",
  "order": 2
}
```

**Document 3:**
```json
{
  "_type": "additionalInformationSection",
  "title": "Staff Qualifications",
  "content": "All faculty members have relevant qualifications and teaching experience. Regular professional development and training programs are conducted.",
  "order": 3
}
```

**Document 4:**
```json
{
  "_type": "additionalInformationSection",
  "title": "Fee Details",
  "content": "Fee structure is transparent and available on the school website and office. Scholarships and financial assistance are provided to deserving students based on merit and need.",
  "order": 4
}
```

**Document 5:**
```json
{
  "_type": "additionalInformationSection",
  "title": "Grievance Redressal",
  "content": "The school maintains a formal grievance redressal mechanism. Parents and students can approach the principal or designated committee for any concerns. All grievances are addressed promptly and fairly.",
  "order": 5
}
```

### 4. furtherClarifications (Create 1 document)

```json
{
  "_type": "furtherClarifications",
  "title": "For Further Clarifications",
  "subtitle": "Contact the School Office:",
  "phone": "+91 XXXXXXXXXX",
  "email": "info@saiaca.in",
  "officeHours": "9:00 AM - 4:00 PM (Monday to Friday)"
}
```

---

## SUMMARY

**Total Documents to Create**: 40

| Phase | Schema | Count |
|-------|--------|-------|
| 1 | welcomeSection | 1 |
| 1 | schoolStats | 3 |
| 2 | aboutPageContent | 1 |
| 2 | principalMessage | 1 |
| 2 | managementTeamMember | 3 |
| 3 | admissionClassInfo | 3 |
| 3 | admissionProcessStep | 4 |
| 3 | admissionImportantDate | 6 |
| 4 | schoolInformation | 1 |
| 4 | requiredDocument | 7 |
| 4 | additionalInformationSection | 5 |
| 4 | furtherClarifications | 1 |
| **TOTAL** | | **40** |

---

## How to Use This Template

1. Go to your Sanity Studio dashboard
2. Click **"Create"** button
3. Select the document type from the list above
4. Copy the JSON content from this template
5. Fill in the fields (note: Photos and PDFs must be uploaded through Sanity UI)
6. Click **"Publish"**

**For Images & Files**: 
- Click the image/file field in Sanity Studio
- Upload from your computer
- The asset reference will be auto-generated (don't use the placeholder IDs)

**Important Notes**:
- Dates use ISO format: YYYY-MM-DD
- Adjust dates, phone numbers, and addresses to your actual values
- Upload real photos and PDF documents instead of placeholders
- Schools must publish documents before they appear on the website
