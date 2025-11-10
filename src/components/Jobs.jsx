import Job from "./Job";

const Jobs = (props) => {
  console.log(props);
  return (
    <div className={props.className}>
      <Job />
    </div>
  );
};

export default Jobs;
