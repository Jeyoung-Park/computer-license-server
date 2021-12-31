// 설명 리스트 로드
async function getDescriptions() {
  try {
    const res = await axios.get("/descriptions");
    const descriptions = res.data ?? [];
    console.log("descriptions,", descriptions);
    const tbody = document.querySelector("#description-list tbody");
    tbody.innerHTML = "";
    descriptions.map(function (description) {
      const row = document.createElement("tr");
      // 로우 셀 추가
      let td = document.createElement("td");
      td.textContent = description.id;
      row.appendChild(td);
      td = document.createElement("td");
      td.textContent = description.category_id;
      row.appendChild(td);
      td = document.createElement("td");
      td.textContent = description.content;
      row.appendChild(td);
      td = document.createElement("td");
      td.textContent == description?.is_like ? "O" : "X";
      row.appendChild(td);
      td = document.createElement("td");
      td.textContent = description.keyword;
      row.appendChild(td);
      tbody.appendChild(row);
    });
  } catch (err) {
    console.error(err);
  }
}

// 설명 등록
document
  .getElementById("description-form")
  .addEventListener("submit", async (e) => {
    e.preventDefault();
    const category_id = e.target.category_id.value;
    const content = e.target.content.value;
    const is_like = e.target.is_like.checked;
    const keyword = e.target.keyword.value;
    if (!category_id) {
      return alert("유형을 입력해주세요");
    }
    if (!content) {
      return alert("내용을 입력해주세요");
    }
    try {
      await axios.post("/descriptions", { category_id, content, is_like, keyword });
      getDescriptions();
    } catch (err) {
      console.error(err);
    }
    e.target.category_id.value = "";
    e.target.content.value = "";
    e.target.is_like.checked = false;
    e.target.keyword.value = "";
  });
