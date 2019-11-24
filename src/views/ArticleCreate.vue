<template>
  <div>
    <h3>{{id?'编辑':'新建'}}文章</h3>
    <el-form :model="model">
      <el-form-item label="文章标题">
        <el-input v-model="model.title"></el-input>
      </el-form-item>
      <el-form-item label="文章内容">
        <el-input type="textarea" v-model="model.body"></el-input>
      </el-form-item>
      <el-button type="info" @click="create">保存</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      model: {}
    };
  },
  components: {},
  methods: {
    async create() {
      if (!this.id) {
        this.$http.post("/articles/create", this.model).then((req, res) => {
          this.$route.push("/articles/list");
        });
      } else {
        const res = await this.$http.post(
          `/articles/edit/${this.id}`,
          this.model
        );
        if (res.data) {
          this.$message({
            message: "编辑成功",
            type: "success"
          });
        }
      }
    },
    async fetch() {
      const res = await this.$http.get(`/articles/${this.id}`);
      this.model = res.data;
    }
  },
  created() {
    if (this.id) {
      this.fetch();
    }
  }
};
</script>

