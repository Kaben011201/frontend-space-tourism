const Title = ({num, title}: {num: string, title: string}) => {
  return (
    <h1 className="title">
      <span>{num}</span>{title}
    </h1>
  );
}

export default Title
