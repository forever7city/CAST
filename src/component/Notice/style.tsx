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

export const Title = styled.div`
  width: 245px;
  height: 50px;
  font-weight: 400;
  font-size: 44px;
  line-height: 50px;
  text-align: center;
  margin-left: 20px;
  margin-top: 54px;
`;

export const Kinds = styled.div`
  width: 905px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 3px solid black;
  border-bottom: 1px solid black;
  background: rgba(165, 201, 254, 0.3);
  margin-top: 52px;
  margin-left: 20px;
  padding: 10px 13px;
`;

export const Number = styled.div`
  width: 40px;
  height: 20px;
  display: flex;
  font-weight: 400;
  font-size: 18px;
  line-height: 20px;
`;

export const KindTitle = styled(Number)``;

export const Bind = styled.div`
  width: 340px;
  display: flex;
  justify-content: space-between;
`;

export const Writer = styled(Number)`
  width: 70px;
`;

export const Date = styled(Writer)``;

export const Check = styled(Writer)``;

export const List = styled.div`
  width: 905px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid black;
  margin-left: 20px;
  padding: 10px 13px;
`;

export const ListNumber = styled.div`
  width: 30px;
  height: 20px;
  font-weight: 400;
  font-size: 18px;
  line-height: 20px;
`;

export const ListTitle = styled.div`
  width: 450px;
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 400;
  font-size: 18px;
  line-height: 20px;
`;

export const ListWriter = styled(ListTitle)`
  width: 100px;
`;

export const ListDate = styled(ListWriter)`
  width: 120px;
`;

export const ListCheck = styled(ListWriter)`
  width: 90px;
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

export const SubjectBox = styled.div`
  position: absolute;
  width: 170px;
  height: 130px;
  left: 250px;
  top: 340px;
  float: left;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  padding: 15px;
`;

export const SubTitle = styled.div`
  width: 78px;
  height: 34px;
  font-weight: 600;
  font-size: 20px;
  line-height: 22px;
`;

export const SubBind = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  margin-top: 10px;
`;

export const SubList = styled.div`
  width: 5px;
  height: 5px;
  text-align: center;
  border-radius: 50%;
  background-color: black;
  margin-top: 5px;
`;

export const SubJect = styled.div`
  width: 48px;
  height: 15px;
  font-weight: 400;
  font-size: 14px;
  margin-left: 15px;
  cursor: pointer;
`;

export const Write = styled.div`
  width: 108px;
  height: 20px;
  background: rgba(79, 113, 235, 0.5);
  margin-top: 20px;
  margin-right: 22px;
  float: right;
  padding: 10px;
  font-weight: 400;
  font-size: 20px;
  line-height: 22px;
  text-align: center;
  cursor: pointer;
`;
