const { postDescription } = require("./descriptions");

describe("postDescription", () => {
  const req = {
    body: {
      category_id: 1,
      content: "설명 본문입니다.",
      is_like: false,
      keyword: "설명",
    },
  };
  const res = {
    status: jest.fn(() => res),
    send: jest.fn(),
  };
  const next = jest.fn();

  test("사용자 등록에 성공하고 success를 응답해야 함", async () => {
    await postDescription(req, res, next);
    expect(res.send).toBeCalledWith("success");
  });
});
