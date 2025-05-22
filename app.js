const { BrowserRouter, Routes, Route, Link } = ReactRouterDOM;

function Navbar() {
  return (
    <nav className="bg-white shadow px-4 py-2 flex items-center">
      <Link to="/" className="text-xl font-bold mr-4">d’Perfume</Link>
      <ul className="flex space-x-4 ml-auto">
        <li><Link className="text-gray-600" to="/product">Product</Link></li>
        <li><Link className="text-gray-600" to="/login">Login</Link></li>
        <li><Link className="text-gray-600" to="/member">Member</Link></li>
      </ul>
    </nav>
  );
}

function HomePage() {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Home Page</h2>
      <p>Welcome to the React version of D'PERFUME.</p>
    </div>
  );
}

function ProductPage() {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Product Page</h2>
      <p>Product details will go here.</p>
    </div>
  );
}

function LoginPage() {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Login Page</h2>
      <p>Please log in to continue.</p>
    </div>
  );
}

function MemberPage() {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Member Page</h2>
      <p>Member information will be displayed here.</p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/member" element={<MemberPage />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
