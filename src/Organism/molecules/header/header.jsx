export default function Header (){
    return <header style={{
        padding: '10px',
        display: 'flex',
        justifyContent:'space-between',
        alignItems: 'center',
    }}>
        <h1>User List</h1>
        <div style={{
            display: 'flex',
            gap: '10px',
        }}>
            <button style={{padding:"1vh"}}>LIGHT</button>
            <button style={{padding:"1vh"}}>DARK</button>
        </div>
    </header>
}