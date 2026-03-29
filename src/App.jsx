import Profile from './components/Profile';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-slate-900 min-h-screen text-white selection:bg-purple-500/30">
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-blue-500/5 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-purple-500/5 blur-[120px] rounded-full animate-pulse delay-1000" />
      </div>

      <main>
        <div className="sticky top-0 z-10"><Profile /></div>
        <div className="sticky top-0 z-20"><Skills /></div>
        <div className="sticky top-0 z-30"><Projects /></div>
        <div className="sticky top-0 z-40"><Contact /></div>
      </main>
    </div>
  );
}

export default App;
