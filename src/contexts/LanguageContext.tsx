import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "el";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translations object
const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navbar
    "nav.home": "Home",
    "nav.about": "About",
    "nav.services": "Services",
    "nav.contact": "Contact",
    
    // Hero
    "hero.subtitle": "Psychologist, MSc Cognitive Behavioural Psychotherapy",
    "hero.quote": "Mental health is not a destination, but a process. It's about how you drive, not where you're going.",
    
    // About
    "about.title": "About Me",
    "about.intro": "I have a Psychology degree from the Aristotle University of Thessaloniki and a Master's in Neuropsychology from Maastricht University. During my studies, I focused on understanding how the brain functions in relation to behavior and the neurobiological processes involved in neuropsychiatric disorders.",
    "about.academic.title": "What is my academic background?",
    "about.academic.content": "I have a Psychology degree from the Aristotle University of Thessaloniki and a Master's in Neuropsychology from Maastricht University. During my studies, I focused on understanding how the brain functions in relation to behavior and the neurobiological processes involved in neuropsychiatric disorders.",
    "about.experience.title": "What are my professional and volunteer experiences?",
    "about.experience.content": "I have completed my practical training at the Greek Center for Mental Health and Research, gaining experience in a clinical setting. Additionally, I provide volunteer psychotherapy sessions through the milamou.gr platform, offering support to people in need with limited access to mental health services.",
    "about.training.title": "What kind of training am I following?",
    "about.training.content": "I am in training for Cognitive Behavioral Therapy (CBT) through the 4-year program of the Greek Society of Cognitive Behavioral Psychotherapy, with the goal of integrating this approach into my clinical practice.",
    "about.work.title": "How do I work as a psychologist?",
    "about.work.content": "I believe that therapy is a process of exploration, acceptance, and change. In my work, I try to create a safe space where each person can connect with their needs and develop more functional ways of managing their life.",
    "about.work.online": "Sessions are conducted online, so you can have support wherever you are.",
    "about.work.fees": "If you are facing financial difficulties, there are reduced fees to make psychological help accessible to everyone.",
    "about.work.free": "The first meeting is free, so you can see how we can work together without any commitment.",
    "about.questions.title": "Curious? Let's Explore Together! 💭",
    
    // Services
    "services.title": "My Services",
    "services.discover": "Discover Your Path",
    "services.click": "Click to explore my services",
    "services.student.title": "Student Counseling",
    "services.student.desc": "A safe space for students dealing with academic stress, anxiety, low confidence, or adjustment to university life. Focus on coping strategies and emotional support.",
    "services.transitions.title": "Life Transitions & Adjustment",
    "services.transitions.desc": "Guidance during major changes such as relocation, career shifts, or personal life transitions. Helps manage stress, uncertainty, and adjustment difficulties while building resilience.",
    "services.selfesteem.title": "Self-Esteem & Perfectionism",
    "services.selfesteem.desc": "Support to overcome self-criticism, perfectionism, and low self-confidence, and to develop self-compassion and emotional resilience.",
    "services.grief.title": "Grief & Loss Support",
    "services.grief.desc": "Therapy for navigating bereavement, relationship endings, or other significant losses, helping you process emotions and adjust to life changes.",
    
    // Contact
    "contact.title": "Contact",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.date": "Preferred Date",
    "contact.time": "Preferred Time",
    "contact.selectTime": "Select a time",
    "contact.topic": "What would you like to discuss?",
    "contact.selectTopic": "Select a topic",
    "contact.additional": "Additional Information",
    "contact.placeholder": "Please provide any additional details you'd like to share",
    "contact.send": "Send Message",
    "contact.sending": "Sending...",
    "contact.success": "Message sent successfully! We'll get back to you soon.",
    "contact.error": "Failed to send message. Please try again or contact us directly.",
    "contact.weekendError": "Please select a weekday (Monday-Friday).",
    "contact.issues.anxiety": "Anxiety and Stress",
    "contact.issues.confidence": "Insecurity and Self-confidence",
    "contact.issues.anger": "Anger Management",
    "contact.issues.loneliness": "Feelings of Loneliness or Isolation",
    "contact.issues.relationships": "Relationship Issues (Friends, Family, Romantic)",
    "contact.issues.exhaustion": "Feelings of Exhaustion and Burnout",
    "contact.issues.communication": "Communication Problems",
    "contact.issues.lifeChanges": "Managing Life Changes (e.g., New Job, Moving)",
    "contact.issues.negativeThoughts": "Dealing with Negative Thoughts",
    "contact.issues.selfEsteem": "Building Self-esteem",
    "contact.issues.workLife": "Work-Life Balance",
    "contact.issues.sleep": "Sleep Problems or Low Energy",
    "contact.issues.personalGrowth": "Finding Meaning and Personal Growth",
    "contact.issues.fear": "Managing Fear and Indecision",
    "contact.issues.other": "Other (Please specify in message)",
    
    // Footer
    "footer.getInTouch": "Get in Touch",
    "footer.connect": "Connect with Me",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    "footer.rights": "All rights reserved.",
    "footer.available": "Available Monday to Friday 9:00-16:00",
    "footer.location": "Maastricht, The Netherlands",
    
    // Error Boundary
    "error.title": "Oops! Something went wrong",
    "error.message": "We're sorry, but something unexpected happened. Please try refreshing the page.",
    "error.details": "Error Details (Development Only)",
    "error.home": "Go to Home Page",
    "error.reload": "Reload Page",
  },
  el: {
    // Navbar
    "nav.home": "Αρχική",
    "nav.about": "Σχετικά",
    "nav.services": "Υπηρεσίες",
    "nav.contact": "Επικοινωνία",
    
    // Hero
    "hero.subtitle": "Ψυχολόγος, MSc Γνωστική Συμπεριφορική Ψυχοθεραπεία",
    "hero.quote": "Η ψυχική υγεία δεν είναι ένας προορισμός, αλλά μια διαδικασία. Έχει να κάνει με το πώς οδηγείς, όχι με το πού πηγαίνεις.",
    
    // About
    "about.title": "Σχετικά με εμένα",
    "about.intro": "Έχω πτυχίο Ψυχολογίας από το Αριστοτέλειο Πανεπιστήμιο Θεσσαλονίκης και μεταπτυχιακό στη Νευροψυχολογία από το Maastricht University. Κατά τη διάρκεια των σπουδών μου εστίασα στην κατανόηση της λειτουργίας του εγκεφάλου σε σχέση με τη συμπεριφορά και στις νευροβιολογικές διεργασίες που εμπλέκονται σε νευροψυχιατρικές διαταραχές.",
    "about.academic.title": "Ποιο είναι το ακαδημαϊκό μου υπόβαθρο;",
    "about.academic.content": "Έχω πτυχίο Ψυχολογίας από το Αριστοτέλειο Πανεπιστήμιο Θεσσαλονίκης και μεταπτυχιακό στη Νευροψυχολογία από το Maastricht University. Κατά τη διάρκεια των σπουδών μου εστίασα στην κατανόηση της λειτουργίας του εγκεφάλου σε σχέση με τη συμπεριφορά και στις νευροβιολογικές διεργασίες που εμπλέκονται σε νευροψυχιατρικές διαταραχές.",
    "about.experience.title": "Ποιες είναι οι επαγγελματικές και εθελοντικές μου εμπειρίες;",
    "about.experience.content": "Έχω ολοκληρώσει την πρακτική μου άσκηση στο Ελληνικό Κέντρο Ψυχικής Υγιεινής και Ερευνών, αποκτώντας εμπειρία σε κλινικό πλαίσιο. Επιπλέον, παρέχω εθελοντικές ψυχοθεραπευτικές συνεδρίες μέσω της πλατφόρμας milamou.gr, προσφέροντας στήριξη σε άτομα που έχουν ανάγκη και περιορισμένη πρόσβαση σε υπηρεσίες ψυχικής υγείας.",
    "about.training.title": "Τι είδους εκπαίδευση ακολουθώ;",
    "about.training.content": "Βρίσκομαι σε εκπαίδευση στη Γνωστική Συμπεριφορική Θεραπεία (CBT) μέσω του 4ετούς προγράμματος της Ελληνικής Εταιρίας Γνωστικής Συμπεριφορικής Ψυχοθεραπείας, με στόχο να ενσωματώσω αυτή την προσέγγιση στην κλινική μου πρακτική.",
    "about.work.title": "Πώς δουλεύω ως ψυχολόγος;",
    "about.work.content": "Πιστεύω ότι η θεραπεία είναι μια διαδικασία εξερεύνησης, αποδοχής και αλλαγής. Στην εργασία μου προσπαθώ να δημιουργώ έναν ασφαλή χώρο, όπου κάθε άτομο μπορεί να συνδεθεί με τις ανάγκες του και να αναπτύξει πιο λειτουργικούς τρόπους διαχείρισης της ζωής του.",
    "about.work.online": "Οι συνεδρίες γίνονται online, ώστε να έχεις υποστήριξη όπου κι αν βρίσκεσαι.",
    "about.work.fees": "Αν αντιμετωπίζεις οικονομικές δυσκολίες, υπάρχουν μειωμένα τέλη, για να είναι η ψυχολογική βοήθεια προσβάσιμη σε όλους.",
    "about.work.free": "Η πρώτη γνωριμία είναι δωρεάν, για να δεις πώς μπορούμε να δουλέψουμε μαζί χωρίς καμία δέσμευση.",
    "about.questions.title": "Έχεις ερωτήσεις; Ας τις εξερευνήσουμε μαζί! 💭",
    
    // Services
    "services.title": "Οι Υπηρεσίες μου",
    "services.discover": "Ανακαλύψτε το Δρόμο σας",
    "services.click": "Κάντε κλικ για να εξερευνήσετε τις υπηρεσίες μου",
    "services.student.title": "Συμβουλευτική Φοιτητών",
    "services.student.desc": "Ένας ασφαλής χώρος για φοιτητές που αντιμετωπίζουν ακαδημαϊκό άγχος, άγχος, χαμηλή αυτοπεποίθηση ή προσαρμογή στην πανεπιστημιακή ζωή. Εστίαση σε στρατηγικές αντιμετώπισης και συναισθηματική υποστήριξη.",
    "services.transitions.title": "Μεταβάσεις & Προσαρμογή στη Ζωή",
    "services.transitions.desc": "Οδηγία κατά τη διάρκεια σημαντικών αλλαγών όπως μετακόμιση, μεταβολές καριέρας ή προσωπικές μεταβάσεις ζωής. Βοηθά στη διαχείριση άγχους, αβεβαιότητας και δυσκολιών προσαρμογής ενώ οικοδομεί ανθεκτικότητα.",
    "services.selfesteem.title": "Αυτοεκτίμηση & Τελειομανία",
    "services.selfesteem.desc": "Υποστήριξη για να ξεπεράσετε την αυτοκριτική, την τελειομανία και τη χαμηλή αυτοπεποίθηση, και να αναπτύξετε αυτοσυμπόνοια και συναισθηματική ανθεκτικότητα.",
    "services.grief.title": "Υποστήριξη Θρήνου & Απώλειας",
    "services.grief.desc": "Θεραπεία για την περιήγηση στη θλίψη, τα τέλη σχέσεων ή άλλες σημαντικές απώλειες, βοηθώντας σας να επεξεργαστείτε συναισθήματα και να προσαρμοστείτε σε αλλαγές ζωής.",
    
    // Contact
    "contact.title": "Επικοινωνία",
    "contact.name": "Όνομα",
    "contact.email": "Email",
    "contact.date": "Προτιμητέα Ημερομηνία",
    "contact.time": "Προτιμητέα Ώρα",
    "contact.selectTime": "Επιλέξτε ώρα",
    "contact.topic": "Τι θα θέλατε να συζητήσουμε;",
    "contact.selectTopic": "Επιλέξτε θέμα",
    "contact.additional": "Πρόσθετες Πληροφορίες",
    "contact.placeholder": "Παρακαλώ δώστε οποιεσδήποτε πρόσθετες λεπτομέρειες που θα θέλατε να μοιραστείτε",
    "contact.send": "Αποστολή Μηνύματος",
    "contact.sending": "Αποστολή...",
    "contact.success": "Το μήνυμα στάλθηκε επιτυχώς! Θα επικοινωνήσουμε μαζί σας σύντομα.",
    "contact.error": "Αποτυχία αποστολής μηνύματος. Παρακαλώ δοκιμάστε ξανά ή επικοινωνήστε μαζί μας απευθείας.",
    "contact.weekendError": "Παρακαλώ επιλέξτε μια εργάσιμη ημέρα (Δευτέρα-Παρασκευή).",
    "contact.issues.anxiety": "Άγχος και Στρες",
    "contact.issues.confidence": "Ανασφάλεια και Αυτοπεποίθηση",
    "contact.issues.anger": "Διαχείριση Θυμού",
    "contact.issues.loneliness": "Αισθήματα Μοναξιάς ή Απομόνωσης",
    "contact.issues.relationships": "Προβλήματα Σχέσεων (Φίλοι, Οικογένεια, Ρομαντικές)",
    "contact.issues.exhaustion": "Αισθήματα Εξάντλησης και Εξουθένωσης",
    "contact.issues.communication": "Προβλήματα Επικοινωνίας",
    "contact.issues.lifeChanges": "Διαχείριση Αλλαγών Ζωής (π.χ. Νέα Δουλειά, Μετακόμιση)",
    "contact.issues.negativeThoughts": "Αντιμετώπιση Αρνητικών Σκέψεων",
    "contact.issues.selfEsteem": "Οικοδόμηση Αυτοεκτίμησης",
    "contact.issues.workLife": "Ισορροπία Εργασίας-Ζωής",
    "contact.issues.sleep": "Προβλήματα Ύπνου ή Χαμηλή Ενέργεια",
    "contact.issues.personalGrowth": "Εύρεση Νοήματος και Προσωπική Ανάπτυξη",
    "contact.issues.fear": "Διαχείριση Φόβου και Αποφασιστικότητας",
    "contact.issues.other": "Άλλο (Παρακαλώ δώστε λεπτομέρειες στο μήνυμα)",
    
    // Footer
    "footer.getInTouch": "Επικοινωνήστε μαζί μου",
    "footer.connect": "Συνδεθείτε μαζί μου",
    "footer.privacy": "Πολιτική Απορρήτου",
    "footer.terms": "Όροι Χρήσης",
    "footer.rights": "Όλα τα δικαιώματα διατηρούνται.",
    "footer.available": "Διαθέσιμη Δευτέρα έως Παρασκευή 9:00-16:00",
    "footer.location": "Maastricht, Ολλανδία",
    
    // Error Boundary
    "error.title": "Ωχ! Κάτι πήγε στραβά",
    "error.message": "Λυπούμαστε, αλλά κάτι απρόσμενο συνέβη. Παρακαλώ δοκιμάστε να ανανεώσετε τη σελίδα.",
    "error.details": "Λεπτομέρειες Σφάλματος (Μόνο για Ανάπτυξη)",
    "error.home": "Πηγαίνετε στην Αρχική Σελίδα",
    "error.reload": "Ανανέωση Σελίδας",
  },
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    // Get language from localStorage or default to Greek
    const savedLanguage = localStorage.getItem("language") as Language;
    return savedLanguage || "el";
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

