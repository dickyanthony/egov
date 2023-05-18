import { stats } from "../constants";
import styles from "../style";
import Button from "./Button.jsx";

const Stats = () => (
  <section className={`${styles.flexCenter}  flex-wrap sm:mb-20 mb-6 `}>
    {stats.map((stat) => (
      <div
        key={stat.id}
        className={`flex-1 flex justify-center items-center flex-col m-3 border-2 h-[200px] border-sky-500 rounded-[12px]`}
      >
        <h4 className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] mt-2 text-gradient leading-[43.16px] ">
          {stat.value}
        </h4>
        <p className="font-poppins font-normal xs:text-[15.45px] text-[10.45px] xs:leading-[26.58px] mt-2 leading-[21.58px] ml-3 text-white">
          {stat.title}
        </p>
        <Button
          url={stat.url}
          text="View"
          styles="py-2 mt-2 h-10 text-white text-[12px]"
        />
      </div>
    ))}
  </section>
);

export default Stats;
