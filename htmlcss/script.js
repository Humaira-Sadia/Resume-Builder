// Define the updateCV function before using it
const updateCV = (prev, next) => {
  prev.addEventListener("input", function () {
    next.textContent = prev.value;
  });
};

const updateTime = (tp1, tp2, tn) => {
  tp1.addEventListener("input", function () {
    tn.textContent = tp1.value + " to " + tp2.value;
  });

  tp2.addEventListener("input", function () {
    if (tp1.value > tp2.value) {
      alert("Ending date must be greater than the starting date");
    } else {
      tn.textContent = tp1.value + " to " + tp2.value;
    }
  });
};

const name = document.getElementById("fname"),
  yname = document.getElementById("naam"),
  email = document.getElementById("email"),
  zmail = document.getElementById("mail"),
  profession = document.getElementById("profession"),
  zprof = document.getElementById("z-profession"),
  phone = document.getElementById("phone"),
  zphone = document.getElementById("phone-no"),
  website = document.getElementById("website"),
  zwebsite = document.getElementById("z-website"),
  desig1 = document.getElementById("desig-1"),
  zdesig1 = document.getElementById("z-desig1"),
  company1 = document.getElementById("comp-1"),
  zcompany1 = document.getElementById("institution-name1"),
  tm11 = document.getElementById("tm-1.1"),
  ztm11 = document.getElementById("timeline1"),
  tm12 = document.getElementById("tm-1.2"),
  desExp1 = document.getElementById("des-exp-1"),
  zdesExp1 = document.getElementById("zdescription1"),
  desig2 = document.getElementById("desig-2"),
  zdesig2 = document.getElementById("z-desig2"),
  company2 = document.getElementById("comp-2"),
  zcompany2 = document.getElementById("institution-name2"),
  tm21 = document.getElementById("tm-2.1"),
  ztm21 = document.getElementById("timeline2"),
  tm22 = document.getElementById("tm-2.2"),
  desExp2 = document.getElementById("des-exp-2"),
  zdesExp2 = document.getElementById("zdescription2"),
  desg = document.getElementById("deg1"),
  zdesg = document.getElementById("education-1"),
  inst1 = document.getElementById("inst1"),
  zinst1 = document.getElementById("instt1"),
  instAdd1 = document.getElementById("instAdd1"),
  zinstAdd1 = document.getElementById("address1"),
  percentage1 = document.getElementById("per1"),
  zpercentage1 = document.getElementById("percentage1"),
  tm31 = document.getElementById("tm-3.1"),
  ztm31 = document.getElementById("timeline3.1"),
  tm32 = document.getElementById("tm-3.2"),
  desg2 = document.getElementById("deg2"),
  zdesg2 = document.getElementById("education-2"),
  inst2 = document.getElementById("inst2"),
  zinst2 = document.getElementById("instt2"),
  instAdd2 = document.getElementById("instAdd2"),
  zinstAdd2 = document.getElementById("address2"),
  percentage2 = document.getElementById("per2"),
  zpercentage2 = document.getElementById("percentage2"),
  tm41 = document.getElementById("tm-4.1"),
  ztm41 = document.getElementById("timeline4.1"),
  tm42 = document.getElementById("tm-4.2"),
  title1 = document.getElementById("title1"),
  ztitle1 = document.getElementById("achieve-1"),
  achievement1 = document.getElementById("ach1"),
  zachievement1 = document.getElementById("ach-1"),
  title2 = document.getElementById("title2"),
  ztitle2 = document.getElementById("achieve-2"),
  achievement2 = document.getElementById("ach2"),
  zachievement2 = document.getElementById("ach-2");

  skill = document.getElementById("skill");

updateCV(name, yname);
updateCV(email, zmail);
updateCV(profession, zprof);
updateCV(phone, zphone);
updateCV(website, zwebsite);

updateCV(desig1, zdesig1);
updateCV(company1, zcompany1);
updateTime(tm11, tm12, ztm11);
updateCV(desExp1, zdesExp1);

updateCV(desig2, zdesig2);
updateCV(company2, zcompany2);
updateTime(tm21, tm22, ztm21);
updateCV(desExp2, zdesExp2);

updateCV(desg, zdesg);
updateCV(inst1, zinst1);
updateCV(instAdd1, zinstAdd1);
updateCV(percentage1, zpercentage1);
updateTime(tm31, tm32, ztm31);

updateCV(desg2, zdesg2);
updateCV(inst2, zinst2);
updateCV(instAdd2, zinstAdd2);
updateCV(percentage2, zpercentage2);
updateTime(tm41, tm42, ztm41);

updateCV(title1, ztitle1);
updateCV(title2, zachievement2);
updateCV(achievement1, zachievement1);
updateCV(achievement2, zachievement2);
