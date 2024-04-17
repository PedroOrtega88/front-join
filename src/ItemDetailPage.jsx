const ItemDetailPage = ({ data }) => {
  return (
    <>
      <h3>{item.title}</h3>
      <p>Completed: {`${data.completed}`}</p>
    </>
  );
};

export default ItemDetailPage;
