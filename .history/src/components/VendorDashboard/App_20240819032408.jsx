import Dashboard from "./Dashboard";
import MainContent from "./MainContent";
import Nav from "./Nav";


const App = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-100 overflow-hidden">
      <Dashboard />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Nav vendorName="Vendor's Name" />
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <MainContent />
        </main>
      </div>
    </div>
  );
};

export default App;
