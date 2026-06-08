import { Kicker, Table } from "deck-kit";
import type { SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "六週核心課綱：跟著做 → 自己做",
  section: "Handover 與收尾",
  theme: "dark",
};

export default function Slide() {
  return (
    <>
      <Kicker>On-hand Training</Kicker>
      <h2>六週核心課綱：跟著做 &gt; 自己做</h2>
      <Table large>
        <thead>
          <tr>
            <th>週次</th>
            <th>主題</th>
            <th>結業能力</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>中台架構 + git 版控 + PG 三層模型</td>
            <td>理解三層設計、能完成版控提交與審核</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Airflow 入門 + 第一個排程 DAG</td>
            <td>能讀懂與手動操作既有排程</td>
          </tr>
          <tr>
            <td>3</td>
            <td>排程撰寫模式（冪等/增量/回補）</td>
            <td>能選對可重用模板</td>
          </tr>
          <tr>
            <td>4</td>
            <td>dbt 模型 + schema 變更 + 資料測試</td>
            <td>能新增模型、走完變更流程</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Grafana 看板 + ADI + 故障 SOP</td>
            <td>能配看板、設告警、處理常見故障</td>
          </tr>
          <tr data-highlight="">
            <td>6</td>
            <td>結業實作：獨立新增一張中台資料表</td>
            <td>整合前五週能力，顧問僅在旁提示</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}
