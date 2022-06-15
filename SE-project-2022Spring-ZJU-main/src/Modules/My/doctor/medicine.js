import { Button, Form, Input, Popconfirm, Table } from "antd";
import React, { useContext, useEffect, useRef, useState } from "react";
import Selection from "./selection";
import "../my.css";
import { Axios } from "axios";
const EditableContext = React.createContext(null);

const EditableRow = ({ index, ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};

const EditableCell = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  ...restProps
}) => {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef(null);
  const form = useContext(EditableContext);
  useEffect(() => {
    if (editing) {
      inputRef.current.focus();
    }
  }, [editing]);

  const toggleEdit = () => {
    setEditing(!editing);
    form.setFieldsValue({
      [dataIndex]: record[dataIndex]
    });
  };

  const save = async () => {
    try {
      const values = await form.validateFields();
      toggleEdit();
      handleSave({ ...record, ...values });
    } catch (errInfo) {
      console.log("Save failed:", errInfo);
    }
  };

  let childNode = children;

  if (editable) {
    childNode = editing ? (
      <Form.Item
        style={{
          margin: 0
        }}
        name={dataIndex}
        rules={[
          {
            required: true,
            message: `${title} is required.`
          }
        ]}
      >
        <Input ref={inputRef} onPressEnter={save} onBlur={save} />
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{
          paddingRight: 24
        }}
        onClick={toggleEdit}
      >
        {children}
      </div>
    );
  }

  return <td {...restProps}>{childNode}</td>;
};

function Medicine() {
  const [dataSource, setDataSource] = useState([
    {
      key: "0",
      name: "请输入药品名称",
      frequent: "请输入使用频率",
      day: "请输入使用天数",
      account: "请输入药品剂量",
      amount: "请输入药品数量"
    }
  ]);
  const [count, setCount] = useState(1);

  const handleDelete = key => {
    const newData = dataSource.filter(item => item.key !== key);
    setDataSource(newData);
  };

  const defaultColumns = [
    {
      title: "药品名称",
      dataIndex: "name",
      width: "20%",
      editable: true
    },
    {
      title: "服用频率",
      dataIndex: "frequent",
      width: "19%",
      editable: true
    },
    {
      title: "剂量",
      dataIndex: "account",
      width: "20%",
      editable: true
    },
    {
      title: "服用天数",
      dataIndex: "day",
      width: "15%",
      editable: true
    },
    {
      title: "数量",
      dataIndex: "amount",
      width: "15%",
      editable: true
    },
    {
      title: "操作",
      dataIndex: "operation",
      width: "25",
      render: (_, record) =>
        dataSource.length >= 2 ? (
          <div>
            <button
              className="btn btn-danger smbtn"
              onClick={() => handleDelete(record.key)}
            >
              删除药品
            </button>
          </div>
        ) : (
          <Button className="btn btn-info smbtn" onClick={handleAdd}>
            添加药品
          </Button>
        )
    }
  ];

  const handleAdd = () => {
    const newData = {
      key: count,
      name: "---",
      frequent: "---",
      day: "---",
      account: "---",
      amount: "---"
    };
    setDataSource([...dataSource, newData]);
    setCount(count + 1);
  };

  const handleSave = row => {
    const newData = [...dataSource];
    const index = newData.findIndex(item => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, { ...item, ...row });
    setDataSource(newData);
  };

  const components = {
    body: {
      row: EditableRow,
      cell: EditableCell
    }
  };

  const columns = defaultColumns.map(col => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: record => ({
        record,
        editable: col.editable,
        dataIndex: col.dataIndex,
        title: col.title,
        handleSave
      })
    };
  });

  function onSubmit() {
    alert("提交成功");
    console.log(dataSource);
    Axios.post("localhost:3000/doctor/medicine", {
      MR_ID: this.props.match.params.id,
      medicine_data: dataSource
    }).then(async Response => {
      console.log(Response);
    });
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="tab">
        <Table
          className="table table-bordered tabin"
          components={components}
          rowClassName={() => "editable-row"}
          bordered
          dataSource={dataSource}
          columns={columns}
          pagination={false}
        />
        <div className="media">
          <div className="media-body">
            <Button className="btn btn-info" onClick={handleAdd}>
              添加药品
            </Button>
          </div>
          <div className="media-body">
            <button type="submit" className="btn btn-success">
              保存
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Medicine;
