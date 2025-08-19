import './App.css';

function App() {
  const cong = (a: number, b: number): number => a + b;
  const tru = (a: number, b: number): number => a - b;
  const nhan = (a: number, b: number): number => a * b;
  const chia = (a: number, b: number): number => (b !== 0 ? a / b : NaN);

  const a = 10;
  const b = 10;

  return (
    <>
      <h2>Kết quả tính toán</h2>
      <p>{a} + {b} = {cong(a, b)}</p>
      <p>{a} - {b} = {tru(a, b)}</p>
      <p>{a} × {b} = {nhan(a, b)}</p>
      <p>{a} ÷ {b} = {chia(a, b)}</p>
    </>
  );
}

export default App;
