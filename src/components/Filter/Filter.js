import React, { useEffect,useState } from 'react';
import Accordion from '../Accordion/Accordion';
import './Filter.css';
import Axios from 'axios';
import { toast } from 'react-toastify';
import config from '../../config.json'

const Filter = (props) => {
  const [filters, setFilters ]= useState([]);
  
  useEffect(async () => {
    try {
      const response = await Axios.get(`${config.apiUrl}/filters/productFilters`);
      setFilters(response.data);
    } catch (error) {
      toast.error(error.message);
    }
  }, []);

  const notifyFilterChanged = () => {
    const productFilters = [];
    filters.forEach(filterItem => {
      const checkedDataItems = filterItem.data.filter(dataItem => dataItem.checked);
      if (checkedDataItems.length > 0) {
        productFilters.push({
          key: filterItem.key,
          data: checkedDataItems.map(item => item._id)
        })
      }
    });

    props.filtersChanged(productFilters);
  }

  const filterChangeHandler = (filterKey, dataItemId) => {
    const newFilters = [...filters];

    const filterItem = newFilters.find(item => item.key === filterKey);
    const dataItemIndex = filterItem.data.find(item => item._id === dataItemId);
    dataItemIndex.checked = !dataItemIndex.checked;

    setFilters(newFilters);

    notifyFilterChanged();
  }

  const resetFilters = () => {
    const newFilters = [...filters];
    newFilters.forEach(filterItem => {
      filterItem.data.forEach(dataItem => {
        dataItem.checked = false;
      })
    })

    setFilters(newFilters);
    
    notifyFilterChanged();
  }

	return (
		<>
			<button id='resetBtnStyle' onClick={resetFilters}>
				Reset All
			</button>

			{filters.map((item, i) => {
				return (
					<Accordion
            filter={item}
						filterChangeHandler={filterChangeHandler}
						key={i}></Accordion>
				);
			})}
		</>
	);
};

export default Filter;