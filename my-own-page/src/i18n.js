import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
  en: {
    home: 'Home',
    about: 'About me',
    experience: 'Experience',
    contact: 'Contact',
    shortdescription: 'Franco Alemandi — A frontend developer, focusing on creating digital products with great user experience.',
    maindescription: 'Hi! I am Franco from Argentina. A front-end developer currently working at Qplus, a company dedicated to providing systems solutions to industries. Just as I love programming and I am always learning new technologies in the industry, I also have other interests such as philosophy, history, and economics that I study in my spare time.',
    maindescription2: 'As you will see, I like to travel, I think it has positively changed my life and allowed me to focus on the things I love and like to do, and it also made me meet great people around the world. If you have finished on this website and want to contact me to work together or just want to talk to me about things, just ',
    sendmessage: 'send me a message.',
    resume: 'RESUME',
    profile: 'PROFILE',
    skillset: 'SKILLSET',
    design: 'Design',
    code: 'Code',
    Tools: 'Tools',
    mainresume: 'I am a Front-end developer at Qplus Software Solutions, a company focused on providing software solutions for the mining and industrial sector.',
    s21resume: 'I was a non-teaching collaborator at the Siglo 21 University, an institution founded in order to bring higher education to all corners of the country.',
    doctadevsresume: 'I contribute to Doctadevs, a programming academy thought from a community, inclusive, and supportive perspective, which exists with the goal of training and incorporating new web development professionals into the industry.',
    aboutmeresume: "I was born on July 23, 1992, and, like anyone who wants to know everything about everything, I studied computing, physics, and today sociology. I am currently in my last year of bachelor's degree, and I found a new challenge along the way: being a developer. I learn self-taught and google almost everything, the curiosity that arouses me leads me to remote places on the web and SOF, and I almost always end up following references in the area on Twitter. I learned and am learning HTML, CSS, JavaScript, and a variety of frameworks such as the Flex genius, better known as Bulma, and the utility-first master: Tailwind; for JavaScript I use the V for Green, famous for its ability to progress and scale - some call it Vue.",
    futureresume: 'Tomorrow I want to do innovative projects mixing development with sociology.',
    interestresume: 'Interested in working together? Let’s connect.',
    letstalk: "LET'S TALK",
    worktogether: 'Want to work together? I’m currently accepting new projects and can be reached at',
    language: 'LANG',
  },

  es: {
    home: 'Inicio',
    about: 'Sobre mí',
    experience: 'Experiencia',
    contact: 'Contacto',
    shortdescription: 'Franco Alemandi - desarrollador frontend que se enfoca en crear productos digitales con gran experiencia de usuario.',
    maindescription: '¡Hola! Soy Franco de Argentina. Un desarrollador front-end que actualmente trabaja en Qplus, una empresa dedicada a brindar soluciones de sistemas a las industrias. Así como me encanta la programación y siempre estoy aprendiendo nuevas tecnologías en la industria, también tengo otros intereses, como filosofía, historia y economía, que estudio en mi tiempo libre.',
    maindescription2: 'Como verán, me gusta viajar, creo que ha cambiado positivamente mi vida y me permitió concentrarme en las cosas me gusta hacer, y también me hizo conocer a grandes personas en todo el mundo. Si terminaste en este sitio y deseas ponerte en contacto conmigo para trabajar juntos o simplemente queres hablar conmigo sobre cosas, ',
    sendmessage: 'envíame un mensaje.',
    resume: 'RESUMEN',
    profile: 'PERFIL',
    skillset: 'SKILLS',
    design: 'Diseño',
    code: 'Código',
    Tools: 'Herramientas',
    mainresume: 'Soy desarrollador front-end en Qplus Software Solutions, una compañía enfocada en proporcionar soluciones de software para el sector minero e industrial.',
    s21resume: 'Fui colaborador no docente en la Universidad Siglo 21, una institución fundada para llevar la educación superior a todos los rincones del país.',
    doctadevsresume: 'Contribuyo a Doctadevs, una academia de programación pensada desde una perspectiva comunitaria, inclusiva y de apoyo, que existe con el objetivo de capacitar e incorporar nuevos profesionales de desarrollo web en la industria.',
    aboutmeresume: 'Nací el 23 de julio de 1992 y, como cualquiera que quiera saber todo sobre todo, estudié informática, física y hoy sociología. Actualmente estoy en mi último año de licenciatura, y encontré un nuevo desafío en el camino: ser desarrollador. Aprendo autodidacta y google casi todo, la curiosidad que me despierta me lleva a lugares remotos en la web y SOF, y casi siempre termino siguiendo referencias en el área en Twitter. Aprendí y estoy aprendiendo HTML, CSS, JavaScript y una variedad de frameworks como el genio Flex, mejor conocido como Bulma, y ​​el maestro de la primera utilidad: Tailwind; para JavaScript, uso la V para Verde, famosa por su capacidad de progresar y escalar, algunos lo llaman Vue.',
    futureresume: 'Mañana quiero hacer proyectos innovadores que combinen el desarrollo con la sociología.',
    interestresume: '¿Interesado en trabajar juntos? Contactame.',
    letstalk: 'Nos comuniquemos',
    worktogether: '¿Quieres trabajar juntos? Actualmente acepto nuevos proyectos y me pueden contactar en',
    language: 'IDIOMA',
  },
}

const i18n = new VueI18n({
  messages,
  locale: 'en',
})

export default i18n;