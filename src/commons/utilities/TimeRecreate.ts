export const TimeRecreate = (createdAt: Date) => {
   const oldDate = new Date(createdAt);

   const year = String(oldDate.getFullYear());
   const month = String(oldDate.getMonth() + 1).padStart(2, "0");
   const date = String(oldDate.getDate()).padStart(2, "0");
   const hour = String(oldDate.getHours()).padStart(2, "0");
   const min = String(oldDate.getMinutes()).padStart(2, "0");

   const newDate = `${year}.${month}.${date}`;
   const newTime = `${hour}:${min}`;

   return newDate + "/" + newTime;
};
