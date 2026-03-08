import { useState } from "react"

function App() {
  const [initialAmount, setInitialAmount] = useState("")
  const [monthlyContribution, setMonthlyContribution] = useState("")
  const [annualRate, setAnnualRate] = useState("")
  const [years, setYears] = useState("")
  const [result, setResult] = useState(null)

  function calculate() {
    const monthly = annualRate / 100 / 12
    const months = years * 12
    let total = initialAmount * Math.pow(1 + monthly, months)

    for (let i = 0; i < months; i++) {
      total += monthlyContribution * Math.pow(1 + monthly, months - i)
    }

    const totalDeposited = Number(initialAmount) + (monthlyContribution * months)
    const totalReturn = total - totalDeposited

    setResult({total, totalDeposited, totalReturn})
  }

return (
  <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 w-full max-w-md p-8">
      
      <h1 className="text-2xl font-semibold text-gray-900 mb-8">
        Investment Calculator
      </h1>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-600">Initial Amount (R$)</label>
          <input
            type="number"
            placeholder="10000"
            value={initialAmount}
            onChange={(e) => setInitialAmount(Number(e.target.value))}
            className="border border-gray-200 rounded-lg px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-600">Monthly Contribution (R$)</label>
          <input
            type="number"
            placeholder="500"
            value={monthlyContribution}
            onChange={(e) => setMonthlyContribution(Number(e.target.value))}
            className="border border-gray-200 rounded-lg px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-600">Annual Interest Rate (%)</label>
          <input
            type="number"
            placeholder="12"
            value={annualRate}
            onChange={(e) => setAnnualRate(Number(e.target.value))}
            className="border border-gray-200 rounded-lg px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-600">Period (years)</label>
          <input
            type="number"
            placeholder="10"
            value={years}
            onChange={(e) => setYears(Number(e.target.value))}
            className="border border-gray-200 rounded-lg px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          onClick={calculate}
          className="mt-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition-colors"
        >
          Calculate
        </button>
      </div>

      {result && (
        <div className="mt-8 bg-blue-50 rounded-xl p-6 flex flex-col gap-3">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Final Amount</span>
            <span className="font-semibold text-gray-900">R$ {result.total.toFixed(2)}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Total Deposited</span>
            <span className="font-semibold text-gray-900">R$ {result.totalDeposited.toFixed(2)}</span>
          </div>
          <div className="flex justify-between items-center border-t border-blue-100 pt-3">
            <span className="text-sm text-gray-600">Total Return</span>
            <span className="font-semibold text-green-600">R$ {result.totalReturn.toFixed(2)}</span>
          </div>
        </div>
      )}

    </div>
  </div>
)
}

export default App