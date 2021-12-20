import TransactionAction from './components/TransactionAction';
import TransactionContent from './components/TransactionContent';

function App() {
  return (
    <div className="container mw-md">
      <TransactionAction />
      <TransactionContent />
      <footer className="text-white-50 text-center py-3 fs-7">
        Copyright © 2021 Flyinggiraffe. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
