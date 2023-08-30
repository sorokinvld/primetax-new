import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import Home from './pages/Home';
import Services from './pages/Services';
import Individuals from "./pages/Individuals";
import BusinessEmployment from "./pages/BusinessEmployment";
import ActLaws from "./pages/ActLaws";
import Dashboard from './pages/Dashboard';
import CalendarView from './pages/CalendarView';
import Notifications from './pages/Notifications';
import Help from './pages/Help';
import Registration from './pages/services/Registration';
import PaymentReference from './pages/services/PaymentReference';
import TaxCalculator from './pages/services/TaxCalculator';
import TaxExemption from './pages/individuals/TaxExemption';
import TaxRefund from './pages/individuals/TaxRefund';
import TaxReturn from './pages/individuals/TaxReturn';
import MakePayment from './pages/individuals/MakePayment';
import LandingPage from './pages/LandingPage';
import EmailVerification from './pages/EmailVerification';
import getToken from './hooks/getToken';
import ProtectedRoute from './pages/protectedRoute';
import EditProfile from './pages/EditProfile';
import QuestionsSupport from './pages/services/QuestionsSupport';
import ErrorBoundary from './ErrorBountary';

AOS.init();

function App() {

  return (
    <div>
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/app" element={<Home />} >
              <Route path='dashboard' element={<Dashboard />} />
              <Route path="services" element={<Services />} >
                <Route path="registration" element={<Registration />} />
                <Route path="payment-reference" element={<PaymentReference />} />
                <Route path="tax-computation" element={<TaxCalculator />} />
                <Route path="questions&support" element={<QuestionsSupport />} />
              </Route>
              <Route path="individuals" element={<Individuals />} >
                <Route path="tax-return" element={<TaxReturn />} />
                <Route path="tax-exemption" element={<TaxExemption />} />
                <Route path="tax-refund" element={<TaxRefund />} />
                <Route path="payment" element={<MakePayment />} />
              </Route>
              <Route path="business&employment" element={<BusinessEmployment />} />
              <Route path="act&laws" element={<ActLaws />} />
              <Route path="calendar" element={<CalendarView />} />
              <Route path="nofications" element={<Notifications />} />
              <Route path="help" element={<Help />} />
              <Route path='edit-profile' element={<EditProfile />} />
            </Route>
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path='/email/confirm/*' element={<EmailVerification />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ErrorBoundary>
    </div>
  )
}


export default App
