
import { PieChart, Pie, Legend, Tooltip, Cell } from 'recharts';

const data = [
  { name: 'Sefty', value: 90 },
  { name: 'Matarial ', value: 85 },
  { name: 'Power', value: 100 },
  { name: 'Comfort', value: 100 },
  { name: 'Fuyel Conjunction', value: 15 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF'];


function Pi() {
  return (
    <>

      <PieChart width={400} height={400} >
        <Pie
          data={data}
          cx={200}
          cy={200}
          labelLine={false}
          label={({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
            const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
            const x = cx + radius * Math.cos(-midAngle * Math.PI / 180);
            const y = cy + radius * Math.sin(-midAngle * Math.PI / 180);
            return (
              <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
              </text>
            );
          }}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </>
  )
}

export default Pi