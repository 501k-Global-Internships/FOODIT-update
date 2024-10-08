import { useRoutes } from 'react-router-dom';

import LANDINGPAGE from './pages/landing/landingPage';
import LOGIN from './pages/login';
import SIGNUP from './pages/signup';
import CONFIRMATIONPAGE from './pages/confirmationpage';
import CART from './pages/cart';
import FOODNEARBY from './pages/foodnearby';
import FREQUENTLYORDER from './pages/frequentlyorder';
import TOPRATED from './pages/toprated'
import VENDOR from './pages/vendor'
import SUPRISEME from './pages/supriseme'
import NUMBERPAGE from './pages/numberpage'

import FoodBuddyDirectory from './pages/foodBuddyDirectory';

import FORGETPASSWORD from './pages/forgetpassword'
import CONFIRMPASSWORD from './pages/confirmpassword'
import NEWPASSWORD from './pages/newpassword'
import PASSWORDCONFIRMATION from './pages/passwordconfirmation'
import About from './components/About/About';
import VendorLanding from './pages/vendorLanding';
import VendorDashboard from './components/VendorDashboard/VendorDashboard';
import VendorLogin from './components/VendorDashboard/VendorLogin';
import VendorSignup from './components/VendorDashboard/VendorSignup';
import SignUpForm from './components/VendorDashboard/SignupForm';
import ResetPassword from './components/VendorDashboard/ResetPassword';
import OtpSignup from './components/VendorDashboard/OtpSignup';
import FaceRecognition from './components/VendorDashboard/FaceRecognition';
import DocumentUpload from './components/VendorDashboard/DocumentUpload';






export default function Router() {
    const routes = useRoutes([
      {
        path: "/",
        element: <LANDINGPAGE />,
        index: true,
      },

      {
        path: "login",
        element: <LOGIN />,
        index: true,
      },

      {
        path: "signup",
        element: <SIGNUP />,
        index: true,
      },

      {
        path: "confirmationpage",
        element: <CONFIRMATIONPAGE />,
        index: true,
      },

      {
        path: "cart",
        element: <CART />,
        index: true,
      },

      {
        path: "foodnearby",
        element: <FOODNEARBY />,
        index: true,
      },

      {
        path: "frequentlyorder",
        element: <FREQUENTLYORDER />,
        index: true,
      },
      {
        path: "faceRecognition",
        element: <FaceRecognition />,
        index: true,
      },
      {
        path: "documentUpload",
        element: <DocumentUpload />,
        index: true,
      },
      {
        path: "resetPassword",
        element: <ResetPassword />,
        index: true,
      },
      {
        path: "signupForm",
        element: <SignUpForm />,
        index: true,
      },
      {
        path: "accountCreationSuccess",
        element: <SignUpForm />,
        index: true,
      },
      {
        path: "otpSignup",
        element: <OtpSignup />,
        index: true,
      },

      {
        path: "toprated",
        element: <TOPRATED />,
        index: true,
      },
      {
        path: "vendorSignup",
        element: <VendorSignup />,
        index: true,
      },
      {
        path: "vendorLogin",
        element: <VendorLogin />,
        index: true,
      },

      {
        path: "vendor",
        element: <VENDOR />,
        index: true,
      },

      {
        path: "supriseme",
        element: <SUPRISEME />,
        index: true,
      },
      {
        path: "foodBuddyDirectory",
        element: <FoodBuddyDirectory />,
        index: true,
      },
      {
        path: "vendorLanding",
        element: <VendorLanding />,
        index: true,
      },
      {
        path: "about",
        element: <About />,
        index: true,
      },
      {
        path: "numberpage",
        element: <NUMBERPAGE />,
        index: true,
      },

      {
        path: "forgetpassword",
        element: <FORGETPASSWORD />,
        index: true,
      },

      {
        path: "confirmpassword",
        element: <CONFIRMPASSWORD />,
        index: true,
      },
      {
        path: "vendorDashboard",
        element: <VendorDashboard />,
        index: true,
      },

      {
        path: "newpassword",
        element: <NEWPASSWORD />,
        index: true,
      },

      {
        path: "passwordconfirmation",
        element: <PASSWORDCONFIRMATION />,
        index: true,
      },
    ]);
    return routes;
}