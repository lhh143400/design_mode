import request from '@/utils/request'

const Qs = require('qs')

/**
 * 文件管理 \ 新增附件
 */
export function saveFile(form) {
    return request({
        url: '/api/file/save',
        method: 'post',
        data: form
    })
}

/**
 * 文件管理 \ 新增附件
 */
export function queryFile(fileName) {
    let jsonData={
        fileName:fileName
    }
    return request({
        url: '/api/file/query',
        method: 'post',
        data: Qs.stringify(jsonData)
    })
}
