/**
 * Created by will on 2017/9/21.
 */
$(function () {
    $("#public-style").load("./easytrip-header.html", function () {
        //������������Ƴ��¼���ʼ

        $('.all-sort-list > .item > h3').mouseover(function () {
            $(this).children('i').addClass('active');
            $(this).children('a').addClass('active');
        })
        $('.all-sort-list > .item > h3').mouseout(function () {
            $(this).children('i').removeClass('active');
            $(this).children('a').removeClass('active');
        })

        $('.all-sort-list > .item').hover(function () {
            var eq = $('.all-sort-list > .item').index(this),				//��ȡ��ǰ�����ǵڼ���Ԫ��
                h = $('.all-sort-list').offset().top,						//��ȡ��ǰ�����˵����봰�ڶ�������
                s = $(window).scrollTop(),									//��ȡ�����������˶��ٸ߶�
                i = $(this).offset().top,									//��ǰԪ�ػ������봰�ڶ�������
                item = $(this).children('.item-list').height(),				//�����˵��������������ĸ߶�
                sort = $('.all-sort-list').height();						//��������б������ĸ߶�

            if (item < sort) {												//�������ĸ߶�С�ڸ���ĸ߶�
                if (eq == 0) {
                    $(this).children('.item-list').css('top', (i - h));
                } else {
                    $(this).children('.item-list').css('top', (i - h) + 1);
                }
            } else {
                if (s > h) {												//�ж��������ʾλ�ã���������ĸ߶ȴ������з����б������ĸ߶�
                    if (i - s > 0) {											//�� �����жϵ�ǰ����������λ�� �Ƿ���һ�볬������һ���ڴ�������ʾ��Bug,
                        $(this).children('.item-list').css('top', (s - h) + 2);
                    } else {
                        $(this).children('.item-list').css('top', (s - h) - (-(i - s)) + 2);
                    }
                } else {
                    $(this).children('.item-list').css('top', 3);
                }
            }

            $(this).addClass('active');
            $(this).children('.item-list').css('display', 'block');
        }, function () {
            $(this).removeClass('active');
            $(this).children('.item-list').css('display', 'none');
        });
    })
})
