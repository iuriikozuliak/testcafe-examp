import { Selector } from 'testcafe';

export default class ClusterPage {
    public createButton = Selector('#btnCreateCluster');

    getWidgetStatus(clusterName: string) {
        const widgetLink = Selector('a[data-stack-name="' + clusterName + '"]');
        return widgetLink.find('span[class="status-text pull-right"]').innerText;
    }
}