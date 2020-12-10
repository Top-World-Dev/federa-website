<style lang="scss">
.el-col-16 {
    @media(max-width: 660px) {
        width: 100%;
    }
}
.upload-photo-route {
    padding: 100px 0;
    margin: 0 -20px;
    

    .tools-bar {
        padding: 0 30px;
        margin-bottom: 20px;

        .select-file-type {
            font-size: 18px;
            font-weight: bold;
            color: black;

            .el-dropdown-link {
                cursor: pointer;
                font-family: 'sfuitext-bold';
            }
        }

        .right {
            float: right;
            @media (max-width: 660px) {
                margin-top: 15px;
            }
            .el-icon-plus {
                position: relative;
                top: 3px;
                margin-right: 30px;
                @media (max-width: 660px) {
                    margin-right: 15px;
                }
            }

            .el-input {
                width: 310px;
                @media (max-width: 660px) {
                    width: 270px;
                }
                .el-input__inner {
                    border-radius: 8px;
                }
            }
        }
    }

    .col-name-2 {
        padding-left: 80px;
        @media (max-width: 660px) {
            padding-left: 20px;
        }
    }

    .cel-name {
        position: relative;
        padding-left: 100px;

        img {
            top: 0;
            left: 20px;
            position: absolute;
        }

        .folder-name {
            font-weight: bold;
            font-size: 16px;
            color: black;
            font-family: 'sfuitext-bold';
        }

        .folder-date-time {
            margin-left: 10px;
        }
    }
}
</style>

<template>
<div class="upload-photo-route">
    <div class="tools-bar">
        <el-dropdown class="select-file-type" v-on:command="handleCommand">
            <span class="el-dropdown-link">
                {{ currentFileType }}<i class="el-icon-caret-bottom"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item v-for="(_fileType, index) in fileTypes" :key="index" :command="_fileType.value">
                    {{ _fileType.label }}
                </el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>

        <div class="right">
            <i class="el-icon-plus" style="font-size: 20px;"></i>
            <el-input prefix-icon="el-icon-search" v-model="keyword">
            </el-input>
        </div>
    </div>
    <el-row>
        <el-col :span="16">
            <el-table :data="filteredData" style="width: 100%" class="photo-table">
                <el-table-column label="Name" width="600" prop="name" sortable label-class-name="col-name-2">
                    <template slot-scope="scope">
                        <div class="cel-name" @click="selectFolder(scope.row.id)">
                            <img :src="scope.row.type == 0 ? require('~/assets/images/gray_folder.png') : require('~/assets/images/blue_folder.png')" alt="" />
                            <div class="folder-name">{{ scope.row.name }}</div>
                            <span class="folder-size">{{ toHumanFileSize(scope.row.size, true) }}</span>
                            <span class="folder-date-time">{{ formatTime(scope.row.date_time) }}</span>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column label="Updated" width="180">
                </el-table-column>
                <el-table-column label="Size">
                </el-table-column>
            </el-table>
        </el-col>
    </el-row>
</div>
</template>

<script>
import {format, formatDistanceToNow, differenceInCalendarDays } from 'date-fns';

export default {
    layout: 'admin',
    methods: {
        formatTime: (dateTime) => {
            const result = differenceInCalendarDays(
                new Date(),
                dateTime
            )
            return result > 1 ?
                `${format(dateTime, 'MMM dd, yyyy')} at ${format(dateTime, 'h:mm aaaa')}` :
                formatDistanceToNow(dateTime);
        },
        toHumanFileSize(bytes, si = false, dp = 1) {
            const thresh = si ? 1000 : 1024;

            if (Math.abs(bytes) < thresh) {
                return bytes + ' B';
            }

            const units = si ? ['kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'] : ['KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];
            let u = -1;
            const r = 10 ** dp;

            do {
                bytes /= thresh;
                ++u;
            } while (Math.round(Math.abs(bytes) * r) / r >= thresh && u < units.length - 1);

            return bytes.toFixed(dp) + ' ' + units[u];
        },
        handleCommand(fileType) {
            this.fileType = fileType;
        },
        selectFolder(folder_id) {
            this.selected_folder_id = folder_id
            this.filter_data = []
            var selected_folder = this.data.filter(row => row.id == folder_id)
            if (selected_folder != undefined && selected_folder.length == 1) {
                this.filter_data = selected_folder[0].child
            }
            this.filteredData
        }
    },
    data() {
        return {
            keyword: '',
            fileType: null,
            selected_folder_id: 0,
            fileTypes: [{
                label: 'All Files',
                value: null,
            }, {
                label: 'Type 0',
                value: 0,
            }, {
                label: 'Type 1',
                value: 1,
            }, ],
            data: [{
                id: 1,
                date_time: new Date(2020, 5, 6),
                name: 'Exterior Photos',
                size: 234384000,
                type: 1,
                child: [{
                    id: 11,
                    date_time: new Date(2020, 5, 6),
                    name: 'Child Image',
                    size: 2343000,
                    type: 1,
                }, {
                    id: 12,
                    date_time: new Date(),
                    name: 'Child Image 2',
                    size: 2384000,
                    type: 1,
                }, {
                    id: 13,
                    date_time: new Date(),
                    name: 'Child Image 3',
                    size: 2343840,
                    type: 1,
                }]
            }, {
                id: 2,
                date_time: new Date(),
                name: 'Interior Photos',
                size: 234384000,
                type: 1,
                child: []
            }, {
                id: 3,
                date_time: new Date(),
                name: 'Final Photos',
                size: 234384000,
                type: 1,
                child: []
            }]
        }
    },
    computed: {
        currentFileType() {
            const current = this.fileTypes.find(type => type.value == this.fileType);
            return current.label;
        },
        filteredData: function () {
            if (this.selected_folder_id != 0) {
                return this.filter_data
            }
            return this.fileType ? this.data.filter(row => row.type == this.fileType) : this.data;
        }
    }
}
</script>
