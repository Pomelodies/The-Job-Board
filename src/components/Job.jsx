const Job = (props) => {
  console.log(props);
  return (
    <div className={props.className}>
      <div>{props.title}</div>
      <div>
        <p>
          {props.contractType}
          <span> - </span>
          {props.country}
          <span> - </span>
          {props.city}
        </p>
      </div>
    </div>
  );
};

export default Job;
