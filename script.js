//your JS code here. If required.
 const changeButton = document.getElementById('change_button');
    const resetButton = document.getElementById('reset');

    changeButton.addEventListener('click', () => {
      const blockId = document.getElementById('block_id').value;
      const color = document.getElementById('colour_id').value;
      const gridItem = document.getElementById(blockId);

      if (gridItem) {
        // Reset background color of all grid items
        const gridItems = document.getElementsByClassName('grid-item');
        for (const item of gridItems) {
          item.style.backgroundColor = 'transparent';
        }

        // Change the background color of the selected grid item
        gridItem.style.backgroundColor = color;
      }
    });

    resetButton.addEventListener('click', () => {
      // Reset background color of all grid items
      const gridItems = document.getElementsByClassName('grid-item');
      for (const item of gridItems) {
        item.style.backgroundColor = 'transparent';
      }
    });