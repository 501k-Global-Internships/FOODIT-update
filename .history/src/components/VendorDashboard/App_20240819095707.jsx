import Dashboard from "./Dashboard";
import MainContent from "./MainContent";
import Nav from "./Nav";


const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <Nav vendorName="Vendor's Name" toggleSidebar={toggleSidebar} />
      <div className="flex flex-1 overflow-hidden">
        <Dashboard isOpen={isSidebarOpen} />
        <main className="flex-1 overflow-y-auto p-4 md:p-6 md:ml-64">
          <MainContent />
        </main>
      </div>
    </div>
  );
};

export default App;
