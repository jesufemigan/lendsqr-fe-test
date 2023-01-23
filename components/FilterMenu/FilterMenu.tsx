import style from "../../styles/components/FilterMenu.module.scss";

const FilterMenu = () => {
  return (
    <div className={style.container}>
      <div>
        <label htmlFor="">Organization</label>
        <select name="" id="" placeholder="Select">
          <option value="Select">Select</option>
        </select>
      </div>
      <div>
        <label htmlFor="">Username</label>
        <input type="text" placeholder="User" />
      </div>
      <div>
        <label htmlFor="">Email</label>
        <input type="text" placeholder="Email" />
      </div>
      <div>
        <label htmlFor="">Date</label>
        <input type="date" placeholder="Date" />
      </div>
      <div>
        <label htmlFor="">Phone Number</label>
        <input type="text" placeholder="Phone Number" />
      </div>

      <div>
        <label htmlFor="">Status</label>
        <select name="" id="">
          Select
        </select>
      </div>

      <span>
        <button className={style.resetBtn}>Reset</button>
        <button className={style.filterBtn}>Filter</button>
      </span>
    </div>
  );
};
export default FilterMenu;
