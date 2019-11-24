<template>
  <div>
    <el-table :data="items">
      <el-table-column prop="title" label="日期" width="140"></el-table-column>
      <el-table-column prop="body" label="姓名" width="120"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="edit(scope.row._id)">编辑</el-button>
          <el-button size="mini" type="danger" @click="remove(scope.row._id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: []
    };
  },
  components: {},
  methods: {
    async fetch() {
      const res = await this.$http.get("/articles/list");
      this.items = res.data;
      // window.console.log(data);
    },
    async remove(id) {
      const res = await this.$http.delete(`/articles/remove/${id}`);
      this.fetch();
    },
    async edit(id) {
      this.$router.push(`/articles/edit/${id}`);
    }
  },
  created() {
    this.fetch();
  }
};
</script>

