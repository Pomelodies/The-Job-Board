import Title from "./Title";

const Header = (props) => {
  // console.log(props);
  return (
    <>
      <Title name={props.name} />
    </>
  );
};

export default Header;
