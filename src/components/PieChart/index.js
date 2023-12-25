import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'

const data = [
  {
    count: 809680,
    language: 'Telugu',
  },
  {
    count: 4555697,
    language: 'Hindi',
  },
  {
    count: 12345657,
    language: 'English',
  },
]

const PieCharts = () => (
  <ResponsiveContainer width="100%" height={500}>
    <PieChart>
      <Pie
        cx="50%"
        cy="50%"
        data={data}
        startAngle={0}
        endAngle={360}
        innerRadius="40%"
        outerRadius="70%"
        dataKey="count"
      >
        <Cell name="Telugu" fill="#fecba6" />
        <Cell name="Hindi" fill="#b3d23f" />
        <Cell name="English" fill="#a44c9e" />
      </Pie>
      <Legend
        iconType="square"
        layout="Vertical"
        verticalAlign="middle"
        align="right"
        wrapperStyle={{
          padding: 20,
        }}
      />
    </PieChart>
  </ResponsiveContainer>
)

export default PieCharts
