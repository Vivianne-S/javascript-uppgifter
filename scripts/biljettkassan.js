const biljettkassan = {
    ordinaryTicket: 140,
    kidsTicket: 80,
    seniorTicket: 100,
    tuesdayDiscount: 30,
    memberDiscount: 0.1,
    studentDiscount: 20,
  };
  
  const guest = {
    age: 65,
    isTuesday: true,
    isMember: false,
    isStudent: false,
  };
  let price = biljettkassan.ordinaryTicket;
  const usedDiscounts = [];
  
  if (guest.isTuesday) {
    price = price - biljettkassan.tuesdayDiscount;
    usedDiscounts.push("Tisdagsrabatt");
  }
  if (guest.isMember) {
    price = price * (1 - biljettkassan.memberDiscount);
    usedDiscounts.push("Medlemsrabatt");
  }
  if (guest.age < 12) {
    price = biljettkassan.kidsTicket;
    usedDiscounts.push("Barnpris");
  }
  if (guest.isStudent) {
    price = price - biljettkassan.studentDiscount;
    usedDiscounts.push("Studentrabatt");
  }
  if (guest.age > 64) {
    price = biljettkassan.seniorTicket;
    usedDiscounts.push("Seniorrabatt");
  }
  
  console.log("Biljettkostnad:", price);
  console.log("Använda rabatter:", usedDiscounts.join(", "));