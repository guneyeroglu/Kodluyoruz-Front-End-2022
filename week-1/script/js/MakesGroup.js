/*
 * Data'yý importluyoruz. assert {type: "json"} sayesinde module'ümüze json tipinde bir dosya importladýðýmýzý bildiriyoruz.
 * JSX ile çalýþmadýðýmýz ve direkt olarak script elementi ile js dosyamýzý import edeceðimiz için bu iþlemi yapmamýz gerekiyor.
 */
import data from "../data.json" assert { type: "json" };
// id'sini alarak table'ýn baþlangýç noktasýný bir deðiþkene atadým.
const tableMembers = document.getElementById("content-table-body");

const makeGroup = (groupName) => {
  tableMembers.innerHTML = "";
  // data'mý önce gelen parametreye göre filtreliyorum. groupName kýsmý "all" gelirse de boþ olarak algýlamasýný saðlýyorum ki tüm group verilerini çekebileyim.
  data
    .filter((member) =>
      String(member.group).includes(groupName !== "All" ? groupName : "")
    )
    .map((eachMember) => {
      // Her bir oluþmasý gereken elementi oluþturuyor ve bir deðiþkene atýyorum.
      const trMember = document.createElement("tr");
      const tdId = document.createElement("td");
      const tdFullName = document.createElement("td");
      const tdAssistant = document.createElement("td");
      const tdGroupName = document.createElement("td");
      // Gerekli eþitlemeleri yapýyorum ve oluþturulan elementlere verileri set'liyorum.
      tdId.innerHTML = eachMember.id;
      /*
       * name kýsmýnda verilerin yazýmý karmaþýk. Büyük harf, küçük harf karýþmýþ. Güzel gözükmesi için düzenlemek istedim.
       * split method'u ile önce boþluklara göre tüm name'i ayýrýyorum.
       * Oluþan array için map'leme iþlemi yapýyor ve gelen her "word" için ise gerekli iþlemi yapýyorum.
       * charAt method'u ile ilk index'ini alýyorum kelimenin ve büyük harf ile baþlamasý için toLocaleUpperCase method'unu kullanýyorum.
       * Locale dememin sebebi eðitimdeki büyük çoðunluðun Türkiye Cumhuriyeti vatandaþý olmasý ve ad/soyad bilgilerinin bu alfabeyi içeren harflerden oluþmasý.
       * Büyük i ve küçük ý problemi yaþamamak kýsaca.
       * Sonrasýnda ise, kelimenin ilk index'ten sonraki geriye kalan harflerine, küçük harf ile devam ettirmek amacýyla, toLocaleLowerCase method'unu uyguluyorum.
       * En sonda da join method'u ile tüm kelimeleri birleþtirip tek bir string ifade oluþturuyorum.
       */
      tdFullName.innerHTML = String(eachMember.name)
        .split(" ")
        .map(
          (word) =>
            word.charAt(0).toLocaleUpperCase() +
            word.slice(1).toLocaleLowerCase()
        )
        .join(" ");
      tdAssistant.innerHTML = eachMember.assistant ? "Yes" : "-";
      tdGroupName.innerHTML = eachMember.group;
      trMember.append(tdId, tdFullName, tdAssistant, tdGroupName);
      tableMembers.appendChild(trMember);
    });
};

const findAssistant = (groupName) => {
  tableMembers.innerHTML = "";

  data
    .filter(
      (member) =>
        member.assistant === true &&
        String(member.group).includes(groupName !== "All" ? groupName : "")
    )
    .map((eachMember) => {
      const trMember = document.createElement("tr");
      const tdId = document.createElement("td");
      const tdFullName = document.createElement("td");
      const tdAssistant = document.createElement("td");
      const tdGroupName = document.createElement("td");

      tdId.innerHTML = eachMember.id;
      tdFullName.innerHTML = eachMember.name;
      tdAssistant.innerHTML = eachMember.assistant ? "Yes" : "-";
      tdGroupName.innerHTML = eachMember.group;
      trMember.append(tdId, tdFullName, tdAssistant, tdGroupName);
      tableMembers.appendChild(trMember);
    });
};
// Search button'ýmýn click event'ini dinliyorum.
document.getElementById("btn-search").addEventListener("click", () => {
  // Group Name kýsmý için seçili olan button'ýn value'sunu alabilmek için tanýmlama yapýyorum.
  const selectedButton = document.querySelectorAll(".btn-group > *");
  // Assistant için gerekli parametreyi elde etmek amacý ile select yapýmýn value'sunu alýyorum.
  const selectedFilter = document.getElementById("members-filter").value;
  let groupName = null;

  for (let i = 0; i < selectedButton.length; i++) {
    selectedButton[i].classList.length > 0
      ? (groupName = selectedButton[i].value)
      : null;
  }

  // select elementimdeki value true ve false; fakat string ifade. Boolean deðil. Bu yüzden JSON.parse method'unu kullanýyorum. Ýçindeki veriyi boolean olarak görmemi saðlýyor.
  if (groupName && !JSON.parse(selectedFilter)) {
    makeGroup(groupName);
  } else if (groupName && JSON.parse(selectedFilter)) {
    findAssistant(groupName);
  } else {
    window.alert("Please select a group name.");
  }
});
