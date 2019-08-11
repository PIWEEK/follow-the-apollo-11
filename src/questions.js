export default {
  helmet: {
    question: '¿Cuál de los 3 astronautas no pudo pisar la Luna?',
    validAnswerKey: 'mc',
    answers: [
      { key: 'mc', text: 'Michael Collins' },
      { key: 'ea', text: 'Edwin Aldrin' },
      { key: 'na', text: 'Neil Armstrong' }
    ],
    nextStep: {
      msg: 'Ya puedes subir a la Saturn V',
      event: 'closeHelmet',
      awardMutation: 'game/addHelmetToInventory',
      goToRouterName: 'game:find'
    }
  },
  rocket: {
    question: '¿En qué guerra participó "Hap" como experta en materiales?',
    validAnswerKey: 'iiww',
    answers: [
      { key: 'iww', text: 'I Guerra Mundial' },
      { key: 'iiww', text: 'II Guerra Mundial' },
      { key: 'gca', text: 'La guerra de los 100 años' }
    ],
    nextStep: {
      msg: '¡Abróchate los cinturones!',
      event: 'closeRocket',
      awardMutation: 'game/addRocketToInventory',
      goToRouterName: 'game:find'
    }
  },
  trajectory: {
    question: '¿Qué significa STEM?',
    validAnswerKey: 'stem',
    answers: [
      { key: 'mates', text: 'Somos Tremendas En Matemáticas' },
      { key: 'stem', text: 'Science Technology Engineering and Mathematics' },
      { key: 'solar', text: 'Solar Taxonomy Engaged and Monitoring' }
    ],
    nextStep: {
      msg: 'Dirígete a la Luna sin perderte',
      event: 'closeTrajectory',
      awardMutation: 'game/addTrajectoryToInventory',
      goToRouterName: 'game:find'
    }
  },
  eagle: {
    question: '¿Cómo se llama a la operación de posarse en la superficie de la Luna?',
    validAnswerKey: 'luna',
    answers: [
      { key: 'tierra', text: 'Aterrizar' },
      { key: 'luna', text: 'Alunizar' },
      { key: 'cine', text: 'Alucinar' }
    ],
    nextStep: {
      msg: 'Prepárate para alunizar',
      event: 'closeEagle',
      awardMutation: 'game/addEagleToInventory',
      goToRouterName: 'game:find'
    }
  },
  map: {
    question: '¿Qué ciencia se encarga de estudiar la superficie de la Luna?',
    validAnswerKey: 'selenografía',
    answers: [
      { key: 'lunografía', text: 'Lunografía' },
      { key: 'selenografía', text: 'Selenografía' },
      { key: 'cartografía', text: 'Cartografía lunar' }
    ],
    nextStep: {
      msg: 'Date un paseo por la superficie lunar',
      event: 'closeMap',
      awardMutation: 'game/addMapToInventory',
      goToRouterName: 'certificate'
    }
  }
}
