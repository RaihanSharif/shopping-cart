import { useOutletContext } from "react-router-dom";

function Cart() {
  const { porductList, selectedItems, setSelectedItems } = useOutletContext();
  return (
    <>
      <main>
        {selectedItems.map((item) => {
          return (
            <p>
              item ID: {item.id} || count: {item.count}
            </p>
          );
        })}
      </main>
    </>
  );
}

export { Cart };
