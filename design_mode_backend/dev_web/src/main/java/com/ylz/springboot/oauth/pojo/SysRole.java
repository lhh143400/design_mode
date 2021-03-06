package com.ylz.springboot.oauth.pojo;

import java.util.Date;

import com.alibaba.fastjson.annotation.JSONType;
import lombok.*;

/**
 * Created by Mybatis Generator 2019/02/14
 */
@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@JSONType(orders = {"id", "name", "type", "status", "remark", "operator", "operateIp", "operateTime"})
public class SysRole {

    private String id;

    private String name;

    private Integer type;

    private Integer status;

    private String remark;

    private String operator;

    private Date operateTime;

    private String operateIp;
}