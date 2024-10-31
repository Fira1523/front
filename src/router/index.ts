import { createRouter, createWebHistory } from 'vue-router'

import SigninView from '@/views/Authentication/SigninView.vue'
import SignupView from '@/views/Authentication/SignupView.vue'
import CalendarView from '@/views/CalendarView.vue'
import BasicChartView from '@/views/Charts/BasicChartView.vue'
import FormElementsView from '@/views/Forms/FormElementsView.vue'
import FormLayoutView from '@/views/Forms/FormLayoutView.vue'
import SettingsView from '@/views/Pages/SettingsView.vue'
import ProfileView from '@/views/ProfileView.vue'
import TablesView from '@/views/TablesView.vue'
import AlertsView from '@/views/UiElements/AlertsView.vue'
import ButtonsView from '@/views/UiElements/ButtonsView.vue'
import PaymentMethod from '@/views/Panel/PaymentMethod.vue'
// import EditPayMethod from '@/views/EditPayMethod.vue'
import user from '@/views/Panel/user.vue'
import professional from '@/views/Panel/professional.vue'
import category from '@/views/Panel/category.vue'
// import contract from '@/views/Panel/contract.vue'

import proposal from '@/views/proposal/proposal.vue'
import role from '@/views/Panel/role.vue'
import rettingNumber from '@/views/Panel/rettingNumber.vue'
import addProfessional from '@/views/Panel/addProfessional.vue'
import Signup from '@/views/Panel/Signup.vue'
import ProSignup from '@/views/Panel/ProSignup.vue'
import Login from '@/views/Panel/Login.vue'

import FreelancerSkill from '@/views/Panel/FreelancerSkill.vue'
import Project from '@/views/Panel/Project.vue'
import AContract from '@/views/Panel/AContract.vue'
import Telebirr from '@/views/Panel/Telebirr.vue'

import ProjectSkills from '@/views/Panel/ProjectSkills.vue'
import TelePassword from '@/views/Panel/TelePassword.vue'

import ServiceFee from '@/views/Panel/ServiceFee.vue'

import Home from '@/views/Panel/Home.vue'
import ProfileBLd from '@/views/Professional/ProfileBLd.vue'

import ProChatTemplate from '@/views/Professional/ProChatTemplate.vue'
import ProfessionalHome from '@/views/Professional/ProfessionalHome.vue'
import ProfessionalChat from '@/views/Professional/ProfessionalChat.vue'
import ProChatCards from '@/views/Professional/ProChatCards.vue'
import ClientDashboard from '@/views/Client/ClientDashboard.vue'
import ShowProposal from '@/views/Client/ShowProposal.vue'
import contract from '@/views/Client/contract.vue'
import ProjectPost from '@/views/Project/ProjectPost.vue'
import ProjectSkill from '@/views/Project/ProjectSkill.vue'
import ProjectShow from '@/views/Project/ProjectShow.vue'
import ClientProfile from '@/views/Client/ClientProfile.vue'
import ChatCards from '@/views/Client/ChatCards.vue'
import ChatTemplete from '@/views/Client/ChatTemplete.vue'
import ClintChat from '@/views/Client/ClintChat.vue'
import Navbar from '@/views/Client/Navbar.vue'
import Post from '@/views/Client/Post.vue'
import ClientPrePo from '@/views/Client/ClientPrePo.vue'
import ManageContract from '@/views/Client/ManageContract.vue'
import ECommerceView from '@/views/Dashboard/ECommerceView.vue'
import EditClientProfile from '@/views/Panel/EditClientProfile.vue'
import Logout from '@/views/Panel/Logout.vue'
import Transaction from '@/views/Panel/Transaction.vue'
import Ratting from '@/views/Panel/Ratting.vue'
import AdminDashBord from '@/views/Panel/AdminDashBord.vue'
import RattingPro from '@/views/Panel/RattingPro.vue'
import Skills from '@/views/Panel/Skills.vue'
import PcontractShow from '@/views/Professional/PcontractShow.vue'
import ProjectProgress from '@/views/Professional/ProjectProgress.vue'
import BalancePro from '@/views/Professional/BalancePro.vue'
import WatchProposal from '@/views/Professional/WatchProposal.vue'
import ProProfile from '@/views/Professional/ProProfile.vue'
import ProBalance from '@/views/Professional/ProBalance.vue'
import showFinishedJobs from '@/views/Professional/showFinishedJobs.vue'
import ManageProgress from '@/views/Client/ManageProgress.vue'
import Balance from '@/views/Client/Balance.vue'
import TelebirrPaymentGateway from '@/views/Client/TelebirrPaymentGateway.vue'
import countries from '@/views/Panel/countries.vue'
import About from '@/views/Panel/About.vue'
import Contactus from '@/views/Panel/Contactus.vue'
import JobsPage from '../views/panel/JobListPage.vue';


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Home'
    }
  },

  {
    path: '/jobs', // Set the path for the route
    name: 'Jobs',
    component: JobsPage, // Associate the route with the component
  },

  {
    path: '/BalancePro',
    name: 'BalancePro',
    component: BalancePro,
    meta: {
      title: 'BalancePro'
    }
  },
  
  {
    path: '/Contactus',
    name: 'Contactus',
    component:  Contactus,
    // meta:{
    //   title:'Contactus'
    // }
  },
 
  {
    path: '/About',
    name: 'About',
    component: About,
    // meta:{
    // title:'About'
    // }
  },
  
  {
    path: '/showFinishedJobs',
    name: 'showFinishedJobs',
    component: showFinishedJobs,
    meta: {
      title: 'showFinishedJobs'
    }
  },

  
  {
    path: '/RattingPro',
    name: 'RattingPro',
    component: RattingPro,
    meta: {
      title: 'RattingPro'
    }
  },

  
  // {
  //   path: '/Ratting',
  //   name: 'Ratting',
  //   component: Ratting,
  //   meta: {
  //     title: 'Ratting'
  //   }
  // },

  
  {
    path: '/ProBalance',
    name: 'ProBalance',
    component: ProBalance,
    meta: {
      title: 'ProBalance'
    }
  },
  {
    path: '/TelePassword',
    name: 'TelePassword',
    component: TelePassword,
    meta: {
      title: 'TelePassword'
    }
  },
  
  {
    path: '/Skills',
    name: 'Skills',
    component: Skills,
    meta: {
      title: 'Skills'
    }
  },
  {
    path: '/AdminDashBord',
    name: 'AdminDashBord',
    component: AdminDashBord,
    meta: {
      title: 'AdminDashBord'
    }
  },


  
  {
    path: '/Transaction',
    name: 'Transaction',
    component: Transaction,
    meta: {
      title: 'Transaction'
    }
  },

  
  {
    path: '/Telebirr',
    name: 'Telebirr',
    component: Telebirr,
    meta: {
      title: 'Telebirr'
    }
  },

  {
    path: '/Telebirr-Verify',
    name: 'TelebirrVerify',
    component: TelebirrPaymentGateway,
    meta: {
      title: 'Telebirr Verify'
    }
  },
  
  {
    path: '/Balance',
    name: 'Balance',
    component: Balance,
    meta: {
      title: 'Telebirr'
    }
  },
  
  {
    path: '/ManageContract',
    name: 'ManageContract',
    component: ManageContract,
    meta: {
      title: 'ManageContract'
    }
  },
  {
    path: '/ProProfile',
    name: 'ProProfile',
    component: ProProfile,
    meta: {
      title: 'ProProfile'
    }
  },
  
  {
    path: '/contract',
    name: 'contract',
    component: contract,
    meta: {
      title: 'contract'
    }
  },
  {
    path: '/ManageProgress/:contract_id/:projects_id',
    name: 'ManageProgress',
    component: ManageProgress,
    meta: {
      title: 'ManageProgress'
    }
  },
  {
    path: '/Ratting',
    name: 'Ratting',
    component: Ratting,
    meta: {
      title: 'Ratting'
    }
  },

  

  
  {
    path: '/ProjectSkills',
    name: 'ProjectSkills',
    component: ProjectSkills,
    meta: {
      title: 'ProjectSkills'
    }
  },

  
  {
    path: '/Project',
    name: 'Project',
    component: Project,
    meta: {
      title: 'Project'
    }
  },
  
  {
    path: '/FreelancerSkill',
    name: 'FreelancerSkill',
    component: FreelancerSkill,
    meta: {
      title: 'FreelancerSkill'
    }
  },

  {
    path: '/ProjectProgress',
    name: 'ProjectProgress',
    component: ProjectProgress,
    meta: {
      title: 'ProjectProgress'
    }
  },
  {
    path: '/PcontractShow/:proposal_id',
    name: 'PcontractShow',
    component: PcontractShow,
    meta: {
      title: 'PcontractShow'
    }
  },
  {
    path: '/WatchProposal',
    name: 'WatchProposal',
    component: WatchProposal,
    meta: {
      title: 'WatchProposal'
    }
  },
  {
    path:'/panel/:id/EditClientProfile',
     name: 'EditClientProfile',
     component: EditClientProfile,
     meta: {
       title: 'EditClientProfile',
       requiresAuth: true
     }
   },

   
   
  {
    path: '/ChatTemplete',
    name: 'ChatTemplete',
    component: ChatTemplete,
    meta: {
      title: 'ChatTemplete'
    }
  },
     
  {
    path: '/ClientPrePo',
    name: 'ClientPrePo',
    component: ClientPrePo,
    meta: {
      title: 'ClientPrePo'
    }
  },
  {
    path: '/ShowProposal',
    name: 'ShowProposal',
    component: ShowProposal,
    meta: {
      title: 'ShowProposal'
    }
  },
  
  {
    path: '/ProChatTemplate',
    name: 'ProChatTemplate',
    component: ProChatTemplate,
    meta: {
      title: 'ProChatTemplate'
    }
  },
  {
    path: '/eCommerce',
    name: 'eCommerce',
    component: ECommerceView,
    meta: {
      title: 'eCommerce Dashboard'
    }
  },
  
  // {
  //   path: '/ChatCards',
  //   name: 'ChatCards',
  //   component: ChatCards,
  //   meta: {
  //     title: 'ChatCards'
  //   }
  // },
  {
    path: '/ProChatCards',
    name: 'ProChatCards',
    component: ProChatCards,
    meta: {
      title: 'ProChatCards'
    }
  },
  
  {
    path: '/Navbar',
    name: 'Navbar',
    component: Navbar,
    meta: {
      title: 'Navbar'
    }
  },
  {
    path: '/ProfessionalChat',
    name: 'ProfessionalChat',
    component: ProfessionalChat,
    meta: {
      title: 'ProfessionalChat'
    }
  },
  // {
  //   path: '/ClintChat',
  //   name: 'ClintChat',
  //   component: ClintChat,
  //   meta: {
  //     title: 'ClintChat'
  //   }
  // },
  {
    path: '/ProjectShow',
    name: 'ProjectShow',
    component: ProjectShow,
    meta: {
      title: 'ProjectShow'
    }
  },
  {
    path: '/Post',
    name: 'Post',
    component: Post,
    meta: {
      title: 'Post'
    }
  },
  {
    path: '/ClientProfile',
    name: 'ClientProfile',
    component: ClientProfile,
    meta: {
      title: 'ClientProfile'
    }
  },
  {
    path: '/ProjectSkill',
    name: 'ProjectSkill',
    component: ProjectSkill,
    meta: {
      title: 'ProjectSkill'
    }
  },
  {
    path: '/ProjectPost',
    name: 'ProjectPost',
    component: ProjectPost,
    meta: {
      title: 'ProjectPost'
    }
  },
  
  {
    path: '/ClientDashboard',
    name: 'ClientDashboard',
    component:ClientDashboard,
    meta: {
      title: 'ClientDashboard.'
    }
  },
  {
    path: '/Logout',
    name: 'Logout',
    component:Logout,
    meta: {
      title: 'Logout.'
    }
  },
  
  {
    path: '/Signup',
    name: 'Signup',
    component: Signup,
    meta: {
      title: 'Signup'
    }
  },
  {
    path: '/ProSignup',
    name: 'ProSignup',
    component: ProSignup,
    meta: {
      title: 'ProSignup'
    }
  },
  {
    path: '/ProfileBLd',
    name: 'ProfileBLd',
    component: ProfileBLd,
    meta: {
      title: 'profile-bld'
    }
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login,
    meta: {
      title: 'Login'
    }
  },
  // {
  //   path: '/client-home',
  //   name: 'clientHome',
  //   component: ClientHome,
  //   meta: {
  //     title: 'Home'
  //   }
  // },
  {
    path: '/professional-home',
    name: 'professionalHome',
    component: ProfessionalHome,
    meta: {
      title: 'Home'
    }
  },
  {
    path: '/user',
    name: 'user',
    component: user,
    meta: {
      title: 'Users'
    }
  },
  {
    path: '/category',
    name: 'category',
    component: category,
    meta: {
      title: 'Category'
    }
  },
  {
    path: '/AContract',
    name: 'AContract',
    component: AContract,
    meta: {
      title: 'AContract'
    }
  },
  {
    path: '/countries',
    name: 'countries',
    component: countries,
    meta: {
      title: 'countries'
    }
  },
  {
    path: '/Skills',
    name: 'Skills',
    component: Skills,
    meta: {
      title: 'Skills'
    }
  },
  {
    path: '/ServiceFee',
    name: 'ServiceFee',
    component: ServiceFee,
    meta: {
      title: 'ServiceFee'
    }
  },
  
  {
    path: '/proposal',
    name: 'proposal',
    component: proposal,
    meta: {
      title: 'proposal'
    }
  },
  {
    path: '/role',
    name: 'role',
    component: role,
    meta: {
      title: 'role'
    }
  },
  
  
  {
    path: '/professional',
    name: ' professional',
    component:  professional,
    meta: {
      title: ' Professional'
    }
  },
  {
    path: '/Professional/:id/ProfileBLd',
    name: ' ProfileBLd',
    component:  ProfileBLd,
    meta: {
      title: ' ProfileBLd'
    }
  },
  

 
  {
    path: '/payment-method',
    name: 'paymentMethod',
    component: PaymentMethod,
    meta: {
      title: 'Payment Method'
    }
  },
  // {
   
  //   path: '/:id/EditPayMethod',
  //   name: 'EditPayMethod',
  //   component: EditPayMethod,
  //   meta: {
  //     title: 'Payment Method'
  //   }
  // },

  {
    path: '/rettingNumber',
    name: 'rettingNumber',
    component: rettingNumber,
    meta: {
      title: 'Retting Number'
    }
  },


  {
    path: '/calendar',
    name: 'calendar',
    component: CalendarView,
    meta: {
      title: 'Calendar'
    }
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView,
    meta: {
      title: 'Profile'
    }
  },
  {
    path: '/forms/form-elements',
    name: 'formElements',
    component: FormElementsView,
    meta: {
      title: 'Form Elements'
    }
  },
  {
    path: '/forms/form-layout',
    name: 'formLayout',
    component: FormLayoutView,
    meta: {
      title: 'Form Layout'
    }
  },
  {
    path: '/tables',
    name: 'tables',
    component: TablesView,
    meta: {
      title: 'Tables'
    }
  },
  {
    path: '/pages/settings',
    name: 'settings',
    component: SettingsView,
    meta: {
      title: 'Settings'
    }
  },
  {
    path: '/charts/basic-chart',
    name: 'basicChart',
    component: BasicChartView,
    meta: {
      title: 'Basic Chart'
    }
  },
  {
    path: '/ui-elements/alerts',
    name: 'alerts',
    component: AlertsView,
    meta: {
      title: 'Alerts'
    }
  },
  {
    path: '/ui-elements/buttons',
    name: 'buttons',
    component: ButtonsView,
    meta: {
      title: 'Buttons'
    }
  },
  {
    path: '/auth/signin',
    name: 'signin',
    component: SigninView,
    meta: {
      title: 'Signin'
    }
  },
  {
    path: '/auth/signup',
    name: 'signup',
    component: SignupView,
    meta: {
      title: 'Signup'
    }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { left: 0, top: 0 }
  }
})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | Workdiator`
  next()
})

export default router
