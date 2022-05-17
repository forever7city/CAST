import styled from "styled-components";

export const Div = styled.div`
  width: 100%;
  height: 955px;
  background: rgba(241, 194, 245, 0.15);
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  width: 970px;
  height: 955px;
  background-color: white;
  text-align: center;
`;

export const User = styled.div`
  width: 950px;
  height: 295px;
  padding: 45px 0;
  display: flex;
  justify-content: space-evenly;
`;

export const Image = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
`;

export const Divide = styled.div`
  width: 410px;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
`;

export const Modify = styled.button`
  width: 190px;
  height: 75px;
  margin-left: auto;
  font-weight: 400;
  font-size: 35px;
  line-height: 46px;
  background-color: yellow;
  border-radius: 50px;
  border: none;
  cursor: pointer;
`;

export const Info = styled.div`
  width: 440px;
  height: 60px;
  font-weight: 400;
  font-size: 35px;
  line-height: 46px;
`;

export const ListText = styled.div`
  width: 174px;
  height: 60px;
  margin-left: 20px;
  font-weight: 400;
  font-size: 40px;
  line-height: 46px;
  display: flex;
  align-items: center;
`;

export const Kinds = styled.div`
  width: 930px;
  height: 20px;
  padding: 15px 0;
  margin-left: 15px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-top: 2px solid black;
  border-bottom: 2px solid rgba(0, 0, 0, 0.4);
`;

export const Number = styled.div`
  width: 70px;
  height: 30px;
  font-weight: 400;
  font-size: 25px;
  line-height: 36px;
  display: flex;
`;

export const Title = styled(Number)`
  width: 100px;
  justify-content: center;
`;

export const Writer = styled(Number)`
  width: 80px;
`;

export const Date = styled(Writer)``;

export const Check = styled(Number)`
  width: 50px;
`;

export const Lists = styled(Kinds)`
  border-top: none;
  cursor: pointer;
`;

export const ListNumber = styled(Number)`
  width: 50px;
  justify-content: center;
`;

export const ListTitle = styled(Title)`
  display: inline-block;
  width: 150px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const ListCheck = styled(Check)`
  justify-content: center;
`;

export const ListDivide = styled.div`
  width: 450px;
  display: flex;
  justify-content: space-around;
`;

export const KindDivide = styled(ListDivide)`
  margin-left: 30px;
`;
export const SelectDivide = styled.div`
  width: 100%;
  margin-top: 36px;
  display: flex;
  justify-content: center;
`;

export const SelectLeftBox = styled.div`
  width: 40px;
  height: 40px;
  background: #ffffff;
  border: 1px solid #000000;
  box-sizing: border-box;
  font-weight: 400;
  font-size: 20px;
  cursor: pointer;
  padding-top: 4px;
`;

export const SelectRightBox = styled(SelectLeftBox)`
  border-left: none;
`;

export const SelectNumberBox = styled.div`
  width: 40px;
  height: 40px;
  background: rgba(196, 196, 196, 0.4);
  border: 1px solid #000000;
  border-left: none;
  border-right: 1px solid black;
  box-sizing: border-box;
  font-weight: 400;
  font-size: 25px;
  cursor: pointer;
`;
