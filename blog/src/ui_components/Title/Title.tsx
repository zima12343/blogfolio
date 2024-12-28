
interface IProps {
    title: string,
}
const Title = ({ title }: IProps) => {
    return <h2 style={{
            fontSize: "56px",
            fontWeight: 700,
            margin: "72px 0 40px"
        }}>
            {title}
        </h2>
}

export default Title;