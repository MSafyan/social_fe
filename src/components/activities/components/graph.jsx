import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, Tooltip } from 'recharts';

function Graph({ data }) {
    return (
        <div style={{ height: '300px' }}>
            <ResponsiveContainer width='100%' height="100%">
                <LineChart data={data}>
                    <XAxis dataKey="name" />
                    <Line type="monotone" dataKey="value" stroke="#ff6559" />
                    <CartesianGrid vertical={false} stroke="#e0dfdf" />
                    <Tooltip />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Graph