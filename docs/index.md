---
# layout: home
layoutClass: m-nav-layout
outline: [2, 3, 4]
---

<script setup>

import MNavLinks from '/nav/components/MNavLinks.vue'
import { NAV_DATA } from './nav/components/data'

</script>
<style src="./nav/index.scss"></style>

## 常用工具

<MNavLinks v-for="{title, items} in NAV_DATA" :title="title" :items="items"/>

## Vue生态

## React

## 我爱的

<br />
